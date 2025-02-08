# v1.0.0
## added
Given data in SpreadSheet, create a new Google Form located at root of Google Drive. 

### functionality
1. can add kind of questions. Including
  + Multiple Choice
  + Checkbox
  + DropDown list
  + Multi-Choice Grid
  + TickGrid
  + Date
  + Time
  + DateTime
  + Linear Scale
  + Rate

2. can set title for question.
3. can set required or not for question.  
4. can set options for question (if the question can have options).
5. can set choices for question (if the question can have choices).
6. can set show other options for question (if the question can have options).
7. can set help text for question.
8. can enable form as quiz or not.
9. can set points for question.

> [!WARNING]
> This functionality only applies when enable form as quiz.
>
> Otherwise, it will throw error when invoking `questionItem.setPoints` method)
  
10. can add section headers.
11. can set title of section headers.
