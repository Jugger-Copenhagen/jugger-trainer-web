- [ ] save your favorite exercises
- [ ] add simple movement diagram editor to exercise details (circles + arrows)
- [ ] training plan editor (drag and drop exercises into training plan; reorder exercises within training plan)
- [ ] clean up `associatedExerciseIds` in database and codebase

## Simple movement diagram editor

Thoughts on that:

- optional field shape (40x20m octagon)
- palette of available positions (WCAG AA compliant colors for teams; icons for positions)
- drag and drop players onto field from palette
- move players around on field once added
- remove players from field
- freehand draw arrows (pen tool) to indicate movement
- one or more diagrams per exercise
- save diagrams as JSON in exercise details
- reference diagrams by number using e.g. custom remark plugin within exercise description
