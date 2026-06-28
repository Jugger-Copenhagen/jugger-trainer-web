- [x] save your favorite exercises
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

### Things to fix

- [x] remove the icon next to "octagon field", rename to "show field"
- [x] "erase" tool is a pencil!? also it doesn't work. also we don't need it, this should just be
      selection + delete
- overflow in X / Y direction: we should fit the field to the screen
- [x] palette labels are too small, and have no visual hierarchy
- [x] could we shorten the hover labels? (e.g. remove colors from team names)
- contrast between Team 1 + Team 2 colors is low; could we use a different color for Team 2?
- fg color doesn't seem to apply to lines within the icon, just the outside
- drag-and-drop isn't quite working properly:
  - icon should show continuously while dragging
  - cursed blue + white circle thing when you click on a player in the field, move them, or
    remove them: wtf?
  - refs should be in a different order: head, line, goal
  - X button to remove from field is not centered
  - some kind of yellow outline when clicking on a player in the field: maybe this is selection,
    but you can't seem to deselect it by clicking on the field, only by clicking on another player
- cursed arrow drawing: seems like there's some coordinate mismatch or something?
- JSON
  - limit precision on floating-point (e.g. 2-3 decimal places)
  - consider `[x, y]` instead of `{x: x, y: y}` to save space
  - need to test that this can actually be loaded again
