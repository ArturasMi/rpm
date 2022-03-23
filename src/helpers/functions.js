// Used in gallery
export const isOdd = num => {
  return num % 2;
};

export const setInput = (key, form, setForm, errors, setErrors) => value => {
  setForm({
    ...form,
    [key]: value,
  });

  if (errors[key])
    setErrors({
      ...errors,
      [key]: undefined,
    });
};

export const handleYupErrors = (err, setErrors) => {
  let errors = {};
  if (err.errors?.length) {
    for (let index = 0; index < Object.keys(err.errors).length; index++) {
      const keyName = err.errors[index].split(' ')[0];
      errors[keyName] = err.errors[index].substr(
        err.errors[index].indexOf(' ') + 1,
      );
    }
    setErrors(errors);
  }
};
