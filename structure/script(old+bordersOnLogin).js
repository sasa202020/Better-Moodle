/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [{
        // Object @ 0 index
        username: "Alex",
        password: "123",
    },
    {
        // Object @ 1 index
        username: "Mads",
        password: "123",
    },
    {
        // Object @ 2 index
        username: "123",
        password: "123",
    },
];

// inspiration from https://www.geeksforgeeks.org/how-to-change-input-box-borders-after-filling-the-box-using-javascript/ 
var borderGreenEmail = document.getElementById("username");

borderGreenEmail.onchange = function(e) {
    if (borderGreenEmail.value != '') {
        e.target.style.borderLeft = "10px solid #42d98a";
    }
    else {
        e.target.style.borderLeft = "10px solid #fda759";
    }
};

var borderGreenPassword = document.getElementById("password");

borderGreenPassword.onchange = function(e) {
    if (borderGreenPassword.value != '') {
        e.target.style.borderLeft = "10px solid #42d98a";
    }
    else {
        e.target.style.borderLeft = "10px solid #fda759";
    }
};