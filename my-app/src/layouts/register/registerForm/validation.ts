export const nameReg = {
  required: 'must be field',
  minLength: { value: 5, message: 'too shorter' },
};

export const emailReg = {
  required: 'must be field',
  minLength: { value: 5, message: 'too shorter' },
  pattern: {
    value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid Email'
  }
};

export const passwordReg = {
  required: 'must be field',
  minLength: { value: 5, message: 'too shorter' },
};

