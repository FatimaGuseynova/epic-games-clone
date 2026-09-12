import * as yup from "yup"

export const displayNameValidation = yup.object({
    nickname: yup
        .string()
        .required("Enter your display name")
        .min(3, "Must be between 3 and 16 characters")
        .max(16, "Must be between 3 and 16 characters")
        .matches(
            /^[A-Za-zА-Яа-яЁё0-9\_-]+$/,
            "Remove special characters"
        ),

    terms: yup
        .boolean()
        .oneOf([true], "Accept to continue")
})