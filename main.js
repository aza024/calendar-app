for(let i = 1; i <= 31; i++){
    let dates = document.querySelector("#dates")
    console.log(dates)
    const date = document.createElement("li");
    let numDate = document.createTextNode(i)
    date.classList.add("date")
    date.appendChild(numDate)
    dates.appendChild(date)
}