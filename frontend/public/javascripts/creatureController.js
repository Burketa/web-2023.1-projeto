const api = "http://localhost:3001/api"

window.addEventListener("load", function () {
    const formAdd = document.getElementById("form-add")
    formAdd.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(formAdd)
        console.log(formData)
        addCreature(formData)
    })
})

function addCreature(formData) {
    const data = Object.fromEntries(formData.entries())
    console.log("form:", data)

    axios.post(`${api}/creature`, data)
        .then((response) => {
            console.log("Response:", response.data)
            reloadPage()
        })
        .catch((error) => {
            console.error("Error:", error)
        })
}

function reloadPage() {
    window.location.reload()
}