'use strict'

const username_input = document.getElementById("username_input")
const email_input = document.getElementById("email_input")
const password_input = document.getElementById("password_input")
const confirm_password_input = document.getElementById("confirm_password_input")
const signup_form = document.getElementById("signup_form")

const MIN_USERNAME_LENGTH = 5
const MAX_USERNAME_LENGTH = 25

const isBlank = function (value) {
    return value.trim() === ""
}
const isBetween = function (length, min = MIN_USERNAME_LENGTH, max = MAX_USERNAME_LENGTH) {
    return length >= min && length <= max
}
const setError = function (input, message) {
    const parentElement = input.parentElement
    parentElement.classList.remove("sucess")
    parentElement.classList.add("error")
    parentElement.querySelector("small").textContent=message
}
const setSuccess = function (input) {
    const parentElement = input.parentElement
    parentElement.classList.remove("error")
    parentElement.classList.add("sucess")
    parentElement.querySelector("small").textContent=""
}
const isValidEmail = function (email) {
    const format = new RegExp(/^(([^<>() [\]\\.,;:\s@"]+(\.[^<>() [\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return format.test(String(email).toLowerCase())
}
const isPasswordSecure = function (password) {
    const format = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
    return format.test(String(password))
}
//Only One space between two words will be passed
const isValidUserName = function (username) {
    const format = new RegExp(/^([^\s]*[A-Za-z0-9]\s{0,1})[^\s]*$/)
    return format.test(String(username).toLowerCase())
}

const validateUsername = function () {
    let isInputValid = false
    const username = username_input.value.trim()

    if (isBlank(username)) {
        setError(username_input, "Username can't be blank.")
    } else if (!isValidUserName(username)) {
        setError(username_input, `Username Invalid`);
    }
    else if (!isBetween(username.length)) {
        setError(username_input, `Username must be between ${MIN_USERNAME_LENGTH} and ${MAX_USERNAME_LENGTH} characters.`);
    } else {
        setSuccess(username_input);
        isInputValid = true;
    }

    return isInputValid;
}

const validateEmail = function () {
    let isInputValid = false
    const email = email_input.value.trim()

    if (isBlank(email)) {
        setError(email_input, "Email can't be blank.")
    } else if (!isValidEmail(email)) {
        setError(email_input, "Email is not valid.")
    } else {
        setSuccess(email_input)
        isInputValid = true
    }

    return isInputValid;
}

const validatePassword = function () {
    let isInputValid = false

    const password = password_input.value.trim()

    if (isBlank(password)) {
        setError(password_input, "Password can't be blank.")
    } else if (!isPasswordSecure(password)) {
        setError(
            password_input,
            "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
        )
    } else {
        setSuccess(password_input)
        isInputValid = true
    }

    return isInputValid
}

const validateConfirmPassword = function () {
    let isInputValid = false
    const confirmPassword = confirm_password_input.value.trim()
    const password = password_input.value.trim()

    if (isBlank(confirmPassword)) {
        setError(confirm_password_input, "Please enter the password again")
    } else if (password !== confirmPassword) {
        setError(confirm_password_input, "Password confirmation does not match")
    } else {
        setSuccess(confirm_password_input)
        isInputValid = true
    }

    return isInputValid
};

const debounce = function (fn, delay = 500) {
    let timeoutId;
    return function (...args) {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}
//
const selectValidatorToRun = function (event) {
    switch (event.target.id) {
        case "username_input":
            validateUsername()
            break
        case "email_input":
            validateEmail()
            break
        case "password_input":
            validatePassword()
            break
        case "confirm_password_input":
            validateConfirmPassword()
            break
    }
}

signup_form.addEventListener("submit", function (event) {
    event.preventDefault()

    const a = validateUsername(), b = validateEmail(), c = validatePassword(), d = validateConfirmPassword()

    if (a && b && c && d)
        alert("All good! Sending to the server...")
});

signup_form.addEventListener("input", debounce(selectValidatorToRun))
