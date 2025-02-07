# v1.0.0
## added
Given data in SpreadSheet, create a new Google Form located at root of Google Drive.

> [!NOTE]
> `FormApp.create` function create a new Google Form located at root of Google Drive.
>
> And thus, it is not easily found the new Google Form.

> Thanks to Google Gemini
>
> At first time, I develop this project. I did not found the file and I think the file was not create due to some errors (silently)
>
> and research the reason why cause this error for about 10 minutes and I did not found the answer.
> 
> And I came up with an idea, ask Google Gemini, it provides me a lots of reasons that I hadn't never thought about.
>
> After I read the answer from Google Gemini, I found that I totally came up with wrong reason.
>
> The file is created, but located at root of Google Drive (I think it located at location of Google SpreadSheet of this project)

> O.S.
>
> I wanna complain about [AppScript API docs (FormApp.create)](https://developers.google.com/apps-script/reference/forms/form-app#create(String)),
>
> the docs did not say that the created Google Form will be located at root of Google Drive.
