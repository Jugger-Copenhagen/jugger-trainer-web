import { Exercise, ExerciseCreate } from '@/lib/types';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FormControl, Link, Tab, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Markdown from 'react-markdown';

type ExerciseHowToPlayEditorProps = {
  exercise: ExerciseCreate | Exercise;
};

type ActiveTab = 'edit' | 'preview';

const EXERCISE_HOW_TO_PLAY_TEMPLATE = `
# Setup

How do you set up for this exercise? How large of a field do you need? Do you need cones or other equipment? Where do players stand?

# How to Play

What do players do? What is their goal in the game?

# Coaching Notes

What should the coach watch for or try to help players practice? What is the learning goal for this exercise?

# Variants

Are there other ways you can run this exercise? For example, with more or fewer players, or different rules?
`.trim();

export default function ExerciseHowToPlayEditor({ exercise }: ExerciseHowToPlayEditorProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('edit');
  const [howToPlay, setHowToPlay] = useState(exercise.howToPlay || EXERCISE_HOW_TO_PLAY_TEMPLATE);

  return (
    <TabContext value={activeTab}>
      <TabList onChange={(_evt, newActiveTab) => setActiveTab(newActiveTab as ActiveTab)}>
        <Tab label="Edit" value="edit" />
        <Tab label="Preview" value="preview" />
      </TabList>
      <TabPanel value="edit" sx={{ px: 0 }}>
        <FormControl fullWidth>
          <TextField
            name="howToPlay"
            label="How to Play"
            value={howToPlay}
            multiline
            minRows={5}
            required
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
