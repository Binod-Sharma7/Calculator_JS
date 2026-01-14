let display = document.getElementById("display");
let button = document.getElementsByTagName("button");
Array.from(button).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let val = e.target.innerText;
        try {
            if (val === "=") {
                let res = eval(display.value);
                if (Number.isInteger(res)) {
                    display.value = res;
                } else {
                    display.value = res.toFixed(2);
                }
            }
            else if (val === "AC") {
                display.value = "";
            }
            else {
                display.value = display.value + val;
            }
        }
        catch (e) {
            display.value = "Bro thats wrong way!"
        }

    })
})