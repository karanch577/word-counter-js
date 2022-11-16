let counterInp = document.getElementById("conterField")
let output = document.getElementById("output")
let result = document.createTextNode("");


let counter = () => {
    if (counterInp.value.trim() === "") {
        console.log("please enter the word")
        result.data = "0"
    }else {
        result.data = ""
        let arrInp = counterInp.value.trim().split(" ");
        result.data = arrInp.length
    }
    output.appendChild(result)
}