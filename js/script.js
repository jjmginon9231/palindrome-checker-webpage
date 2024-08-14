const textInput = document.getElementById("text-input"),
    checkBtn = document.getElementById("check-btn"),
    result = document.getElementById("result");

textInput.addEventListener("keydown", (e => { "Enter" === e.key && checkBtn.click() }))

checkBtn.addEventListener("click", (() => {
    const lowerCasedReplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    result.style.display = "block", "" === textInput.value
        ? result.innerHTML = `<span style="color: #dc143c;">Please input a value.</span>`
        : 1 === textInput.value.length
            ? result.innerHTML = `Yes, <span style="color: #00b300;"><strong>${textInput.value}</strong></span> is a palindrome`
            : lowerCasedReplaced === [...lowerCasedReplaced].reverse().join("")
                ? result.innerHTML = `Yes, <span style="color: #00b300;"><strong>${textInput.value}</strong></span> is a palindrome.`
                : result.innerHTML = `No, <span style="color: #dc143c;"><strong>${textInput.value}</strong></span> is not a palindrome.`
}));