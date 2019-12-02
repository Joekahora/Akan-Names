var form = new FormData(document.getElementById("form").onsubmit);
var inputValue = form.get("birthday");
var genderValue = form.get("gender");
var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var results = document.getElementById("result")

function akanNames(){
    function dayOfTheWeek(validDay, invalidDay, validMonth, invalidMonth) {
        if (validDay >= 1 || validDay <= 31 && validMonth >= 1 || validMonth <= 12) {
            return inputValue = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
        }
        else if (invalidDay <= 0 || invalidDay > 31 && invalidMonth <= 0 || invalidMonth > 12) {
            return alert("Invalid Day or Month Entered.");
        }

    }

    function akanMalesNames(inputValue, akanMaleNames, genderValue) {
        if (inputValue === 0 && genderValue === "Male" && akanMaleNames === [0]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 1 && genderValue === "Male" && akanMaleNames === [1]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 2 && genderValue === "Male" && akanMaleNames === [2]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 3 && genderValue === "Male" && akanMaleNames === [3]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 4 && genderValue === "Male" && akanMaleNames === [4]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 5 && genderValue === "Male" && akanMaleNames === [5]) {
            return "Your Akan Name is " + akanMalesNames;
        }
        else if (inputValue === 6 && genderValue === "Male" && akanMaleNames === [7]) {
            return "Your Akan Name is " + akanMalesNames;
        }
    }
    

    function akanFemalesNames(inputValue, genderValue, akanFemaleNames) {
        if (inputValue === 0 && genderValue === "Female" && akanFemaleNames === [0]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 1 && genderValue === "Female" && akanFemaleNames === [1]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 2 && genderValue === "Female" && akanFemaleNames === [2]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 3 && genderValue === "Female" && akanFemaleNames === [3]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 4 && genderValue === "Female" && akanFemaleNames === [4]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 5 && genderValue === "Female" && akanFemaleNames === [5]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
        else if (inputValue === 6 && genderValue === "Female" && akanFemaleNames === [6]) {
            return "Your Akan Name is " + akanFemalesNames;
        }
    }
}
return results(akanNames());