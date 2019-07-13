console.log('hello');
const submitForm = document.getElementById("form-subscribe-id");
const emailInput = document.getElementById("email-id");
submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const trimVal = emailInput.value.trim();
    // console.log(event);
    // console.log('form submitted');
    console.log(trimVal);
    if (trimVal == "") {
        alert("Please enter some text!");
        // https://stackoverflow.com/questions/50731460/toggle-disable-attribute-using-javascript/50731511
    } else {
        alert("Thank you for subscribe!");
    }



});