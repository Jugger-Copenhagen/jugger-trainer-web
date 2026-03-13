import { deleteTag, getExercisesRaw, getTags, mergeTags } from '@/lib/firebase';
import { useToastStore } from '@/lib/store';
import { Tag } from '@/lib/types';
import { MoreVert } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useFetcher } from 'react-router';
import type { Route } from './+types/admin-tags';

type SortField = 'tag' | 'exerciseCount';
type SortDir = 'asc' | 'desc';

export async function clientLoader() {
  const tags = await getTags();
  return { tags };
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const action = formData.get('_action') as string;

  if (action === 'delete') {
    const tagID = formData.get('tagID') as string;
    const exercisesRaw = await getExercisesRaw();
    await deleteTag(tagID, exercisesRaw);
    useToastStore.getState().setToast('Tag deleted.', 'success');
    return { ok: true };
  }

  if (action === 'merge') {
    const sourceTagID = formData.get('sourceTagID') as string;
    const targetTagID = formData.get('targetTagID') as string;
    await mergeTags(sourceTagID, targetTagID);
    useToastStore.getState().setToast('Tags merged.', 'success');
    return { ok: true };
  }

  throw new Response('Invalid action', { status: 400 });
}

function sortTags(tags: Tag[], sortField: SortField, sortDir: SortDir): Tag[] {
  return tags.slice().sort((a, b) => {
    let cmp: number;
    if (sortField === 'tag') {
      cmp = a.tag.localeCompare(b.tag);
    } else {
      cmp = a.associatedExerciseIds.length - b.associatedExerciseIds.length;
    }
    return sortDir === 'asc' ? cmp : -cmp;
  });
}

export default function AdminTags({ loaderData }: Route.ComponentProps) {
  const { tags } = loaderData;
  const fetcher = useFetcher();

  const [sortField, setSortField] = useState<SortField>('tag');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  // Actions menu state
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [menuTag, setMenuTag] = useState<Tag | null>(null);

  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Tag | null>(null);

  // Merge dialog state
  const [mergeDialogOpen, setMergeDialogOpen] = useState(false);
  const [mergeSource, setMergeSource] = useState<Tag | null>(null);
  const [mergeTarget, setMergeTarget] = useState<Tag | null>(null);

  const sortedTags = sortTags(tags, sortField, sortDir);
  const isSubmitting = fetcher.state !== 'idle';

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  }

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>, tag: Tag) {
    setMenuAnchorEl(event.currentTarget);
    setMenuTag(tag);
  }

  function handleMenuClose() {
    setMenuAnchorEl(null);
    setMenuTag(null);
  }

  function handleDeleteClick() {
    setDeleteTarget(menuTag);
    setDeleteDialogOpen(true);
    handleMenuClose();
  }

  function handleDeleteConfirm() {
    if (deleteTarget) {
      fetcher.submit(
        { _action: 'delete', tagID: deleteTarget.tagID },
        { method: 'post' },
      );
    }
    setDeleteDialogOpen(false);
    setDeleteTarget(null);
  }

  function handleMergeClick() {
    setMergeSource(menuTag);
    setMergeTarget(null);
    setMergeDialogOpen(true);
    handleMenuClose();
  }

  function handleMergeConfirm() {
    if (mergeSource && mergeTarget) {
      fetcher.submit(
        {
          _action: 'merge',
          sourceTagID: mergeSource.tagID,
          targetTagID: mergeTarget.tagID,
        },
        { method: 'post' },
      );
    }
    setMergeDialogOpen(false);
    setMergeSource(null);
    setMergeTarget(null);
  }

  const mergeOptions = mergeSource
    ? tags.filter((t) => t.tagID !== mergeSource.tagID)
    : [];

  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'tag'}
                  direction={sortField === 'tag' ? sortDir : 'asc'}
                  onClick={() => handleSort('tag')}
                >
                  Tag
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={sortField === 'exerciseCount'}
                  direction={sortField === 'exerciseCount' ? sortDir : 'asc'}
                  onClick={() => handleSort('exerciseCount')}
                >
                  Exercises
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTags.map((tag) => (
              <TableRow key={tag.tagID}>
                <TableCell>{tag.tag}</TableCell>
                <TableCell align="right">{tag.associatedExerciseIds.length}</TableCell>
                <TableCell align="right">
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuOpen(e, tag)}
                    disabled={isSubmitting}
                  >
                    <MoreVert fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
        <MenuItem onClick={handleMergeClick}>Merge into&hellip;</MenuItem>
      </Menu>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete tag</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Delete tag &ldquo;{deleteTarget?.tag}&rdquo;? This will remove it from{' '}
            {deleteTarget?.associatedExerciseIds.length ?? 0} exercises.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" disabled={isSubmitting}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={mergeDialogOpen}
        onClose={() => setMergeDialogOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Merge &ldquo;{mergeSource?.tag}&rdquo; into&hellip;</DialogTitle>
        <DialogContent>
          <Autocomplete
            options={mergeOptions}
            getOptionLabel={(option) => option.tag}
            value={mergeTarget}
            onChange={(_evt, newValue) => setMergeTarget(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Target tag" fullWidth sx={{ mt: 1 }} />
            )}
            isOptionEqualToValue={(option, value) => option.tagID === value.tagID}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setMergeDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleMergeConfirm}
            color="primary"
            disabled={isSubmitting || !mergeTarget}
          >
            Merge
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
