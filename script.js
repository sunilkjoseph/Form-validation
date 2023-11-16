function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;

    if (fname === "") {
        alert("First name cannot be empty.");
        document.getElementById("fname").focus();
        return false;
    }

    if (lname === "") {
        alert("Last name cannot be empty.");
        document.getElementById("lname").focus();
        return false;
    }

    if (dob === "") {
        alert("You should choose a Date of Birth.");
        document.getElementById("dob").focus();
        return false;
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }


    if (pwd.length < 6) {
        alert("Password should be at least 6 characters long.");
        document.getElementById("pwd").focus();
        return false;
    }

    if (cpwd === "") {
        alert("Retype Password");
        document.getElementById("cpwd").focus();
        return false;
    }
    if (pwd !== cpwd) {
        alert("Passwords do not match");
        document.getElementById("cpwd").focus();
        return false;
    }

    alert("Thank you! Your data is submitted.");

    
    return true;
}
