# v1.0.0
## added
Given data in SpreadSheet, create a new Google Form located at root of Google Drive. 

### functionality
+ can add a kind of question.
+ can set title for question.
+ can set required or not for question.  
+ can set options for question (if the question can have options).
+ can set choices for question (if the question can have choices).
+ can set show other options for question (if the question can have options). 
+ can set help text for question.
+ can enable form as quiz or not.
+ can set points for question.

> [!WARNING]
> This functionality only applies when enable form as quiz.
>
> Otherwise, it will throw error when invoking `questionItem.setPoints` method)
  
