# intro
## v1.0.0
1. One can set how many questions will be added and range of cell that will be read for adding question (or section headers)

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

2. One can set kinds of questions in first column (start from `A25`)

<img width="1004" alt="image" src="https://github.com/user-attachments/assets/119b6d86-9f7f-44a7-bf43-44b361e0894a" />
