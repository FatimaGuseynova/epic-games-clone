import * as yup from "yup"

export const birthRegister = yup.object({
    month: yup.string().required('Выберите месяц'),
    day: yup.number().min(1, "Enter your real date of birth").max(31, "Enter your real date of birth")
  })