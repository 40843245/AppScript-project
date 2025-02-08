function createForm() {
  const formName = getFormName();
  const newForm = FormApp.create(formName.toString());
  setForm(newForm);
}
