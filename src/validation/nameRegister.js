import * as yup from "yup"

export const nameRegister = yup.object({
    email: yup.string().required("Required").email("Enter a valid email address"),
    name: yup.string().required('Enter your first name').matches(/^[A-Za-zА-Яа-яЁёӘәƏəİıÖöÜüĞğÇçŞş]+$/, "Remove special characters"),
    lastname: yup.string().required("Enter your last name").matches(/^[A-Za-zА-Яа-яЁёӘәƏəİıÖöÜüĞğÇçŞş]+$/, "Remove special characters"),
    password: yup.string().required("Required").min(7, "Must contain at least 7 characters").matches(/[A-Za-zА-Яа-яЁё]/, "Must contain at least one letter").matches(/[0-9]/, "Must contain at least one number"),
    nickname: yup.string().min(3, "Must be between 3 and 16 characters").max(16, "Must be between 3 and 16 characters").matches(/^[A-Za-zА-Яа-я0-9_-]+$/, "Remove special characters"),
    terms: yup.boolean().oneOf([true], "Accept to continue"),
    terms1: yup.boolean()
})