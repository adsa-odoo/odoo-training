function handleClick(e){
    e.preventDefault()
    const data1 = document.forms.item(0)["name"].value
    const data2 = document.forms.item(0)["surname"].value
    const data3 = document.forms.item(0)["mail"].value
    const data4 = []
    const checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach(e => {
        if(e.checked === true)
        {
            data4.push(e.value)
        }
    })
    window.alert(`Name :${data1}, Surname: ${data2}, Email: ${data3}, Language: ${data4}`)
}
const btn = document.getElementById("btn")
btn.onclick = handleClick

const inputFields = document.querySelectorAll('.input')
inputFields.forEach(e => {
    e.oninput = (ele => {
        if(e.value === '')
            e.style.borderColor = "red"
        else
            e.style.borderColor = "lightgreen"
    })
})

