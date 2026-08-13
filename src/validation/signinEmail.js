import * as yup from "yup"

export const signinEmail = yup.object({
    email: yup.string().email("Enter a valid email address").required("Required")
})