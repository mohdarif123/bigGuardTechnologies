export const contactFormInitialState = () => {
  return {
    name: {
      value: "",
      error: "",
    },
    subject: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  };
};

export const handleFormValidation = (formValue: any) => {
  let errors = formValue;
  let isValid = true;
  const name = formValue!.name.value;
  const email = formValue!.email.value;
  const subject = formValue?.subject?.value;
  const message = formValue?.message?.value;

  if (!name && !email && !subject && !message) {
    errors!.name.error = "Please enter name!";
    errors!.email.error = "Please enter email!";
    errors!.subject.error = "Please enter subject!";
    errors!.message.error = "Please enter message!";
    isValid = false;
  }
  if (!name) {
    errors!.name.error = "Please enter name!";
    isValid = false;
  }
  if (!email) {
    errors!.email.error = "Please enter email!";
    isValid = false;
  }
  if (!subject) {
    errors!.subject.error = "Please enter subject!";
    isValid = false;
  }

  //   if (strings.regex.test(email)) {
  //     errors!.email.error = "Please enter valid email!";
  //     isValid = false;
  //   }
  if (!message) {
    errors!.message.error = "Please enter message!";
    isValid = false;
  }
  return { isValid, errors } as any;
};
