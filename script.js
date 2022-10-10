function clearInput() {
    document.forms["genForm"]["wordInput"].value = "";
    document.getElementById("wordCount").innerHTML = "Words: 0";
}

function checkCount() {
    //get text
    var words = document.forms["genForm"]["wordInput"].value;

    //check if words entered
    if (words === "") {
        document.getElementById("wordCount").innerHTML = "Words: 0";
    }
    else {
        //set text to array
        var wordsArray = words.split(' ');

        //get array length
        var $count = wordsArray.length;

        //display length
        document.getElementById("wordCount").innerHTML = "Words: " + $count;
    }
}