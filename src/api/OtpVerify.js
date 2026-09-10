let BASE_URL = "http://localhost:3000/api";

export const OtpVerify = async (params) => {

    let responsive = await fetch(`${BASE_URL}/auth/verifyOtp`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "content-type": "application/json"
        }
    });

    let data = await responsive.json();

    if (!responsive.ok) {
        throw new Error(data.message || "Invalid OTP code");
    }

    return data;
};