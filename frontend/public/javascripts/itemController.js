const api = "http://localhost:3001/api"

window.addEventListener("load", function () {
    const formAdd = document.getElementById("form-add")
    console.log(formAdd)
    formAdd.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(formAdd)
        console.log(formData)
        addItem(formData)
    })
})

function addItem(formData) {
    const data = Object.fromEntries(formData.entries())
    console.log("form:", data)

    axios.post(`${api}/item`, data)
        .then((response) => {
            console.log("Response:", response.data)
            reloadPage()
        })
        .catch((error) => {
            console.log("Opa, algo deu errado com a sua request")
            console.error("Error:", error)
        })
}


function reloadPage() {
    window.location.reload()
}