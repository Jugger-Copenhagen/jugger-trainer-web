import { Exercise, ExerciseCreate } from '@/lib/types';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FormControl, Link, Tab, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Markdown from 'react-markdown';

type ExerciseHowToPlayEditorProps = {
  exercise: ExerciseCreate | Exercise;
};

type ActiveTab = 'edit' | 'preview';

export default function ExerciseHowToPlayEditor({ exercise }: ExerciseHowToPlayEditorProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('edit');
  const [howToPlay, setHowToPlay] = useState(exercise.howToPlay);

  return (
    <TabContext value={activeTab}>
      <TabList onChange={(_evt, newActiveTab) => setActiveTab(newActiveTab as ActiveTab)}>
        <Tab label="Edit" value="edit" />
        <Tab label="Preview" value="preview" />
      </TabList>
      <TabPanel value="edit">
        <FormControl fullWidth>
          <TextField
            name="howToPlay"
            label="How to Play"
            value={howToPlay}
            multiline
            minRows={5}
            placeholder="Describe your exercise.  You can use Markdown: # heading, _italic_, **bold**"
            onChange={(evt) => setHowToPlay(evt.target.value)}
          />
          <Typography component="span" variant="body2" mt={1}>
            You can use{' '}
            <Link href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
              Markdown formatting
            </Link>{' '}
            for more flexibility.
          </Typography>
        </FormControl>
      </TabPanel>
      <TabPanel value="preview">
        <Markdown>{howToPlay}</Markdown>
      </TabPanel>
    </TabContext>
  );
}
