import * as yup from "yup"

export const birthRegister = yup.object({
    month: yup.string().required('Choose the month'),
    day: yup.number().min(1, "Enter your real date of birth").max(31, "Enter your real date of birth"),
    year: yup.number().min(1950, "Enter your real date of birth").max(2022,"Enter your real date of birth")
  })