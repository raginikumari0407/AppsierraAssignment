    var dob = new Date("10/19/2016");
    //calculate month difference from current date in time

    var month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff); 
    
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    //console.log(year);
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    //console.log(age);
    
    //display the calculated age
    console.log("Age of the date entered is : " + age + " years");