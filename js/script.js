function akanName(){
    //gave the variable dateInput access to the date space which validates its form input 
    var dateInput = document.forms["form"]["date"].value;
    if(dateInput == ""){
        alert("Date Input is Required");
        return ;
    }
    //created month variable, the .value collects the inputted value
    var month = document.forms["form"]["month"].value
    if (month == ""){
        alert("The Month is Required");
        return ;
    }
    //created yearInput variable to collect the year input and validated it
    var yearInput = document.forms["form"]["year"].value
    if (yearInput == ""){
        alert("The Year Is Required");
        return ;
    }

    //created a genderInput variable to get the gender of the person and validate if either is choosen
    var genderInput = document.forms["form"]["gender"].value
    if (genderInput == ""){
        alert("Please Select Your Gender");return
    };

    //subdivided the yearInput Into 4 segments and created its variables
    //the centuryHalf calculates the century half thats the first part
    var centuryHalf =(yearInput.slice(0,2)/4 - 2*yearInput.slice(0,2) -1);

    //the yearHalf calculates the second part of the year
    var yearHalf = (yearInput.slice(-2) /4 );

    // the month half calcuates the month 
    var monthHalf = (26 * (month +1) / 10);

    // the dayOfTheWeek calculates the day of the week by adding the century half,yearandmonth and finding the modulos of 7
    var dayOfTheWeek = (parseInt(centuryHalf)+parseInt(yearHalf)+parseInt(monthHalf)+parseInt(dateInput)) % 7;

    //created an array of days in a week 
    day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    //converted the array index to match that of the day of the week
    if(dayOfTheWeek === 1){
        alert("You Were Born On a " +day[0]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 2){
        alert("You Were Born On a " +day[1]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 3){
        alert("You Were Born On a " +day[2]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 4){
        alert("You Were Born On a " +day[3]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 5){
        alert("You Were Born On a " +day[4]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 6){
        alert("You Were Born On a " +day[5]+ " Click To View Your Akan Name");
    }
    if(dayOfTheWeek === 7){
        alert("You Were Born On a " +day[6]+ " Click To View Your Akan Name");
    }

    //created an array of Male names
    akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    if(dayOfTheWeek === 1 && genderInput === "Male"){
        alert("Your Akan Name Is " +akanMaleNames[0]);
    }
    if(dayOfTheWeek === 2 && genderInput === "Male"){
        alert("Your Akan Name Is "  +akanMaleNames[1]);
    }
    if(dayOfTheWeek === 3 && genderInput === "Male"){
        alert("Your Akan Name Is " +akanMaleNames[2]);
    }
    if(dayOfTheWeek === 4 && genderInput === "Male"){
        alert("Your Akan Name Is "  +akanMaleNames[3]);
    }
    if(dayOfTheWeek === 5 && genderInput === "Male"){
        alert("Your Akan Name Is "  +akanMaleNames[4]);
    }
    if(dayOfTheWeek === 6 && genderInput === "Male"){
        alert("Your Akan Name Is "  +akanMaleNames[5]);
    }
    if(dayOfTheWeek === 7 && genderInput === "Male"){
        alert("Your Akan Name Is "  +akanMaleNames[6]);
    }

    //created an array of the female names
    akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if (dayOfTheWeek === 1 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[0]);
    }
    if (dayOfTheWeek === 2 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[1]);
    }
    if (dayOfTheWeek === 3 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[2]);
    }
    if (dayOfTheWeek === 4 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[3]);
    }
    if (dayOfTheWeek === 5 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[4]);
    }
    if (dayOfTheWeek === 6 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[5]);
    }
    if (dayOfTheWeek === 7 && genderInput === "Female"){
        alert("Your Akan Name Is " + akanFemaleNames[6]);
    }
}