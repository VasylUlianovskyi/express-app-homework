const yup = require('yup');

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  body: yup.string().min(1).max(200).required(),
  deadline: yup.date().min(new Date()),
});
