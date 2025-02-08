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
