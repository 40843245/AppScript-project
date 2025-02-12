# intro
## v1.0.0
1. One can set form name in cell `B20`.

<img width="263" alt="image" src="https://github.com/user-attachments/assets/612625cd-03b4-4ff9-9a3a-997e521b79ee" />

2. One can set form title in cell `C20`.

<img width="566" alt="image" src="https://github.com/user-attachments/assets/fd747204-c7ff-44cf-b9e8-e6d258a039ef" />

3. One can enable the form as quiz in cell `E20`.

<img width="963" alt="image" src="https://github.com/user-attachments/assets/6e6d19a8-0e66-4e48-9ba6-5475e62d4558" />

If it is `YES`, it will enable it as quiz.

If it is `NO`, it will disable it as quiz.

If it is other value, it will be unchanged (by default, it disables it as quiz).

4. One can set how many questions will be added and range of cell that will be read for adding question (or section headers)

by `QuestionLineEnum.MIN_LINE` and `QuestionLineEnum.MAX_LINE` in `enum.gs`.

For example,

The following code snippet will read data from row 25 to row 40 for adding questions (or section headers)

```
const QuestionLineEnum = {
  MIN_LINE: 25,
  MAX_LINE: 40,
}
```

<img width="1004" alt="image" src="https://github.com/user-attachments/assets/02d1eae4-8586-4106-9f20-4d89a6ebc367" />

5. One can set kinds of questions in first column (start from `A25`)

<img width="1004" alt="image" src="https://github.com/user-attachments/assets/119b6d86-9f7f-44a7-bf43-44b361e0894a" />

6. One can set the question is required or not in second column (start from `B25`)

If it is `YES`, the question is required (i.e. respondant must fill the answer for that question).

If it is `NO`, the question is NOT required.

If it is other value, it will be unchanged (by default, it is NOT required).

<img width="266" alt="image" src="https://github.com/user-attachments/assets/2fc07131-e232-4c90-8812-93bcf9e16ceb" />

> [!WARNING]
> It only applies to questions.
>
> For question type is `SECTION_HEADER`, the value of the cell will be ignored.

7. One can set the title of questions or section headers in third column (start from `C25`)

<img width="571" alt="image" src="https://github.com/user-attachments/assets/32004263-dec3-4a39-9e29-6458d6ad2a89" />

8. One can set the choice of Multiple Choice questions or Checkbox questions in fourth column (start from `D25`)

<img width="914" alt="image" src="https://github.com/user-attachments/assets/ea794cf5-2403-4992-ac2a-4f6f5a7e5c8d" />

> [!WARNING]
> It only applies to Multiple Choice questions or Checkbox questions.
>
> For question type is not `MULTIPLE_CHOICE` and `CHECKBOX`, the value of the cell will be ignored.

9. One can set the row grid and column grid of Multi-Choice Grid questions or Checkbox Grid questions in fifth and sixth column (start from `E25`,`F25`) respectively.

<img width="407" alt="image" src="https://github.com/user-attachments/assets/3164f769-e76f-497e-8fde-78c35a4f7a7b" />

<img width="781" alt="image" src="https://github.com/user-attachments/assets/e1c61418-542b-49b5-84e5-fad042a4f2a0" />

> [!WARNING]
> They only apply to Multi-Choice Grid questions or Checkbox Grid questions
>
> For question type is not `GRID` and `CHECKBOX_GRID`, the value of the cell will be ignored.

10. One can set show other options or not in seventh column (start from `G25`) 

If it is `YES`, it will enable to show other options.

If it is `NO`, it will disable to show other options.

If it is other value, it will be unchanged (by default, it is set to show other options).

<img width="169" alt="image" src="https://github.com/user-attachments/assets/79cdb965-e4e5-40b7-8c25-3a885b2d3d0e" />

11. One can set help text for questions in eigth column (start from `H25`)

<img width="182" alt="image" src="https://github.com/user-attachments/assets/2fd79368-333f-4bc2-ba90-7e182d8a98e2" />

> [!WARNING]
> It only applies to questions.
>
> For section header (question type is `SECTION_HEADER`), the value of the cell will be ignored.

> [!TIP]
> What is help text?
>
> help text is a kind of tip that helps one to answer the question.
>
> Examples of help text are boxed with red pen.
>
> <img width="486" alt="image" src="https://github.com/user-attachments/assets/3b130137-b92a-4508-83a5-b9158583b427" />


12. One can set points for each question in ninth column (start from `I25`).

<img width="283" alt="image" src="https://github.com/user-attachments/assets/448971d5-2de9-4e2d-ac9a-efec2924b308" />

> [!WARNING]
> If the point of question is coerced to a negative number, `item.setPoints` method may throw exception, and stop to execute run the code.

> [!WARNING]
> If the point of the question is NOT a safe integer (i.e. `Number.isSafeInteger` static method in JS returns false), the point will be set to zero. 

## v1.0.1
1. One can set description of form in cell `D20`.
2. One can set bounds of Linear scale question in tenth column (start from `J25`).

<img width="481" alt="image" src="https://github.com/user-attachments/assets/4022984b-0566-4d1d-8831-7699882eb7b1" />

> [!NOTE]
> Default bounds are `[1,5]`, lowerbound is `1`, upperbound is `5`.

> [!WARNING]
> It only applies to Linear scale question.
>
> For question type is not `SCALE`, it will not set bounds.

> [!WARNING]
> The value of cell in `bound` field must be two integers seperated by comma.
>
> Otherwise, it will not set bounds.
 
3. One can set labels for bounds of Linear scale question.

<img width="481" alt="image" src="https://github.com/user-attachments/assets/e5cd2842-213f-4534-a283-dd2a6d654940" />

> [!NOTE]
> Default labels are empty strings.

> [!WARNING]
> It only applies to Linear scale question.
>
> For question type is not `SCALE`, it will not set labels.

> [!WARNING]
> The value of cell in `bound` field must be two strings seperated by comma.
>
> Otherwise, it will not set labels.

# v1.1.0
1. add image at top of the form.

<img width="496" alt="image" src="https://github.com/user-attachments/assets/8e403c44-7f47-4e6e-8f0f-b517d8744ffd" />

One can set the `form image title` on cell `E19`.

One can set the `form image help text` on cell `E20`.

One can set `form image url` on cell `E21`.

The code will fetch the image with given url (on cell `E21`).

# v2.0.0
1. One can add image at any item given image url.

<img width="620" alt="image" src="https://github.com/user-attachments/assets/4777bd9a-555a-4280-896c-ff0ed94f7392" />

One can set image title in sixteenth column.

One can set image helper text in seventh column.

The code will fetch image from image url in eighteen column.

<img width="1101" alt="image" src="https://github.com/user-attachments/assets/f20c6820-b05f-4c6b-aa0f-b765f7826530" />

# v3.0.0
1. One can set feedback for correct answer and incorrect answer (on nineteenth column, twentieth column respectively).

> [!WARNING]
> It only applies to mutliple choice and checkbox question.
>
> For those not mutliple choice and checkbox question, it will not set feedback.

> [!WARNING]
> For value of cell is empty, or consist of spaces, it will not set feedback.

<img width="415" alt="image" src="https://github.com/user-attachments/assets/b4788636-aa11-4d57-a73a-9126392dc4ba" />

# v3.1.0
1. One can set correct answer (in twelfth column).

> [!WARNING]
> It only applies to questions that one can set choices to. Here, there are
>
> + Checkbox (question type `CHECKBOX`)
> + Multiple Choice (question type `MULTIPLE_CHOICE`)
> + DropDown List (question type `LIST`)
>
> For those questions that is belong to above kind, it will not set correct answers.

> [!WARNING]
> The correct answers of a question must be a string that consist of Boolean in JS (i.e. `true` or `false`) separated by comma.
>
> If the format is wrong, an error will throw at run time, cause to stop executing the code.

## example
The following table

| question title | ... | choices (seperated by comma, thus each choice should not contain comma)	| ... | correct answer (represented as an array with boolean) (separated with comma) |	feedback of correct answer | feedback of wrong answer | ... |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `MULTIPLE_CHOICE` | ... | Can we reassign a variable that is defined with val modifier in Kotlin?	| yes,no | ...		| `false,true`	|`That's great`	| `You can prepare it more for next time`. | ... |

will generate the item shown as following figure.

<img width="625" alt="image" src="https://github.com/user-attachments/assets/ccbbd0a7-7c09-44b5-bb0b-b456b3dbf1b9" />

<img width="647" alt="image" src="https://github.com/user-attachments/assets/69f85777-c509-4269-a047-7d8a1aeedc13" />

# v3.2.0
1. One can set general feedback (in fifteenth column).

> [!WARNING]
> It only applies to one of following questions.
>
> + paragraph-text (question type `PARAGRAPH_TEXT`)
> + short-text (question type `TEXT`)
>
> For those questions that is belong to above kind, it will not set general feedback.

> [!WARNING]
> For value of cell is empty, or consist of spaces, it will not set feedback.

## example 

The following table

| question type	| ... | question title | ... | general feedback | ... |
| --- | --- | --- | --- | --- | --- |
| `PARAGRAPH_TEXT` | What is JS? | ... | `You can read JS on w3school.`|
| `TEXT` | ... |	Is JS a programming language with week type? | ... | `You can read JS on w3school.` |

will generate the item shown as following figure.

<img width="634" alt="image" src="https://github.com/user-attachments/assets/32c80106-a172-49d8-9e12-592d76c2354f" />

<img width="629" alt="image" src="https://github.com/user-attachments/assets/2ac3799e-21c5-4cf1-be95-17d708dde2f3" />

# v3.3.0
1. One can add video as an item through setting question type as `VIDEO`.

One can set item's title in 21th column.

One can set item's help text in 22th column.

One can add a video with given url in 23th column.

> [!WARNING]
> It only applies for video (for question type `VIDEO`).
>
> For those items whose type is not `VIDEO`, the value of cell in 21th, 22th, 23th column will be ignored and the item will not be set.

> [!WARNING]
> If one of the value in 21th and 23th column (or both) is empty or consist of spaces, the value of cell in 21th, 22th, 23th column will be ignored and the item will not be set.

> [!WARNING]
> If the value of 22th column is empty or consists of spaces, the value of cell in 22th column will be ignored and the item's help text will not be set.

> [!WARNING]
> The value of 23th column must be video url itself (not displayed text of video url).
>
> Otherwise, the url is invalid and it will not set video (through `setVideoUrl` method call).

## example 

The following table

| question type | ... | video title (only available for question type is `VIDEO`)	| video help text (only available for question type is `VIDEO`)	| video url (only available for question type is `VIDEO`) |
| --- | --- | --- | --- | --- |
| `VIDEO` | ... | shocking party | lovelive|	`https://www.youtube.com/watch?v=ZhKF0Dh_Wig&list=RDZhKF0Dh_Wig&start_radio=1`.

<img width="505" alt="image" src="https://github.com/user-attachments/assets/a44d8400-0b0f-4248-aaae-a39b38838fec" />

# v4.0.0
1. One can determine to collect email in cell `L20`.
2. One can determine that respondant submit the form at most once (identified by email) in cell `M20`.
3. One can determine to shuffle questions in cell `N20`.

## example

The following table 

<img width="1190" alt="image" src="https://github.com/user-attachments/assets/22573022-991e-4a1d-a7d2-2ac494028ebf" />

will set the form as follows.

<img width="587" alt="image" src="https://github.com/user-attachments/assets/58dfa7ee-7396-4d2c-bea6-f6ff14b46400" />

# v4.1.0
1. One can determine to enable show progress bar or not when filling the form in cell `L20`.
2. One can set custom closed message in cell `P20`.
3. One can determine to enable publishing summary in cell `Q20`.
4. One can determine to show link once after respondant submitting the form in cell `R20`.

## example

The following table 

<img width="1080" alt="image" src="https://github.com/user-attachments/assets/296aba86-f65e-4cef-8c7f-fdd1ff601fa4" />

will set the form as follows.

<img width="582" alt="image" src="https://github.com/user-attachments/assets/bf492ad4-a6b9-42d0-93f5-673793cd9cce" />
