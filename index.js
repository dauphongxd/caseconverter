document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.querySelector("textarea");
    let upperCaseButton = document.getElementById("upper-case");
    let lowerCaseButton = document.getElementById("lower-case");
    let properCaseButton = document.getElementById("proper-case");
    let sentenceCaseButton = document.getElementById("sentence-case");
    let saveMeButton = document.getElementById("save-text-file");

    upperCaseButton.addEventListener("click", function () {
        textarea.value = textarea.value.toUpperCase();
    });

    lowerCaseButton.addEventListener("click", function () {
        textarea.value = textarea.value.toLowerCase();
    });

    function toProperCase(str) {
        return str.split(" ").map(function (word) {
            return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }).join(" ");
    }

    properCaseButton.addEventListener("click", function () {
       textarea.value = toProperCase(textarea.value);
    });

    function toSentenceCase(str) {
        // Split the text into sentences using a period followed by a space as the delimiter
        return str.split(". ").map(function (word) {
           return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }).join(". "); // Join the sentences back with a period and space
    }

    sentenceCaseButton.addEventListener("click", function () {
        textarea.value = toSentenceCase(textarea.value);
    });

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    saveMeButton.addEventListener("click", function () {
        download("text.txt", textarea.value);
    });
});