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

    /* const formSearch = document.getElementById("form-search")
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(formSearch)
        searchItem(formData)
    }) */
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
            console.error("Error:", error)
        })
}

function searchItem(formData) {
    const data = Object.fromEntries(formData.entries())
    console.log("form:", data)

    axios.get(`${ap}/item/${data.id}`)
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