# v3.1.0
## added
1. can set correct answer.

## code
see [version v3.1.0](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v3.1.0)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v3.1.0](https://youtu.be/Lnm5tGzAkkI)

# v3.0.0
## added
1. can add feedback for correct answer and incorrect answer.

<img width="598" alt="image" src="https://github.com/user-attachments/assets/5d6b7b22-ff8b-4c55-8dbf-208766a9d5b9" />

## code
see [version v3.0.0](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v3.0.0)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v3.0.0](https://youtu.be/9Xv_lgy0i9o)

# v2.0.0
## added
can add image in any item (by setting question type is `IMAGE`).

<img width="620" alt="image" src="https://github.com/user-attachments/assets/5d2ed81b-5c8b-4e87-94b4-19f1a1d2d310" />

## code
see [version v2.0.0](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v2.0.0)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v2.0.0](https://youtu.be/wP66A9b8cIo)
# v1.1.1
## changed
1. If value of field `form image url` on cell `G20` is a empty string, it will not add image (below the section header which is the item on top).

# v1.1.0
## added 
1. add new image below the section header which is the item on top.

<img width="496" alt="image" src="https://github.com/user-attachments/assets/7683ea0d-651d-463a-a9eb-12ccba05a6d0" />

## code
see [version v1.1.0](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v1.1.0)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v1.1.0](https://youtu.be/7Nr94nVejT0)

# v1.0.1
## added
### functionality
1. can set description of form.
2. can set bounds of Linear scale question.
3. can set labels for bounds of Linear scale question.
   
## code
see [version v1.0.1](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v1.0.1)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v1.0.1](https://youtu.be/_w1wlyA0QS0)

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

## plan 
I wanna complete these functionalities in future release.

1. can set description of form.
2. ~~can set description of section headers~~ (I found it is impossible, since there are no description of section header in Google Form).
3. can add a new page and its navigation.
4. can set correct answers.
5. can set feedback message when respondent answers correct. 
6. can set feedback message when respondent answers incorrect. 

## code
see [version v1.0.0](https://github.com/40843245/AppScript-project/tree/main/Google%20Forms/Form%20Generator/Form%20Generator%20given%20Spreadsheet%20data/v1.0.0)

## demo
see [Demo project of Form Generator given SpreadSheet in AppScript in version v1.0.0](https://youtu.be/q4MpT4dG2xE)
