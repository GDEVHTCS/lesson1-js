let input = document.getElementById("num-input");
let input2 = document.getElementById("text-input");
let input3 = document.getElementById("text-input3");
let btn = document.getElementById("submit");
let btn2 = document.getElementById("submit2");
let btn3 = document.getElementById("submit3");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value < 50) {
        result.textContent = "ველის მნიშვნელობა ნაკლებია 50-ზე";
    }
    else if (input.value > 20) {
        result.textContent = "ველის მნიშვნელობა მეტია 20-ზე";
    }
    else {
        result.textContent = "პასუხი არ იძებნება!";
    }
});

btn2.addEventListener("click", (event) => {
    event.preventDefault();

    if (input2.value === "მარიამი") {
        result2.textContent = "ofc its mariam" //or just "true" at if we want that value
    }
    else {
        result2.textContent = "what u tryng!!!???"
    }
})

btn3.addEventListener('click', (event) => {
    event.preventDefault();

    switch (input3.value) {
        case "მარიამი":
            result3.textContent = true;
            result3.style.color = "green"
            break;
        default:
            result3.textContent = false;
            result3.style.color = "red"
            break;
    }
});
