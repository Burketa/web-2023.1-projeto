const api = "http://localhost:3001/api"

window.addEventListener("load", async function () {
    const formLogin = document.getElementById("form-login")
    formLogin.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData(formLogin)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        console.log("checando")
        return await checkUser(data)
    })
})

async function checkUser(data) {
    return await axios.post(`${api}/login`, data)
        .then((response) => {
            console.log(response.data)
            const token = response.data.token
            if (token) {
                doLogin(data)
                return true
            }
            return false
        })
        .catch((error) => {
            console.error("Error:", error)
            return null
        })
}

function doLogin(data) {
    console.log("logado")
    sessionStorage.setItem("jwt", data.token)
    sessionStorage.setItem("name", data.name)
}

function reloadPage() {
    window.location.reload()
}