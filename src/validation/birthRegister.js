import * as yup from "yup"

export const birthRegister = yup.object({
    email: yup.string().email("Enter a valid email address").required("Required")
})