const api = "http://localhost:3001/api"

window.addEventListener("load", async function () {
    const formLogin = document.getElementById("form-login")
    formLogin.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData(formLogin)
        const data = Object.fromEntries(formData.entries())
        console.log(data)


        console.log("checando")
        if (await isUserValid(data)) {
            console.log("existe")
            doLogin(data)
        }
    })
})

async function isUserValid(data) {
    return await axios.post(`${api}/login`, data)
        .then((response) => {
            console.log("Response:", response.data)
            console.log(response.data.pass == data.pass)
            return response.data.pass == data.pass
        })
        .catch((error) => {
            console.error("Error:", error)
            return null
        })
}

function doLogin(data) {
    console.log("logado")
}

function reloadPage() {
    window.location.reload()
}