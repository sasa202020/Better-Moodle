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

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array

        if (username == "Mads" && password == "123") {
            window.location.href = "http://stackoverflow.com";
            // stop the function if this is found to be true
            return;
        }
        if (username == "Alex" && password == "123") {
            window.location.href = "http://youtube.com";
            // stop the function if this is found to be true
            return;
        }
        if (username == "123" && password == "123") {
            window.location.href = "structure/index.html";
            // stop the function if this is found to be true
            return;
        }
    }
    console.log("incorrect username or password");
}