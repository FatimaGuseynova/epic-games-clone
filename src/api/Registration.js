let BASE_URL = 'http://localhost:3000/api'

export class Registration {
  async postDataUser(userData) {
    const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await res.json()

    console.log("STATUS:", res.status)
    console.log("RESPONSE:", data)

    return data
}

    async getUsers(token) {
        const res = await fetch(`${BASE_URL}/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        console.log(data)

        return data
    }
}