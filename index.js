const fs = require("fs");
const path = require("path");


//digraph section starts
var graphString = "digraph FilesGraph {\n";
const search = /\\/;
const replacer = new RegExp(search, 'g')
var rootDirectory = 'F:/Work/corner';
var filesAndDirectoriesList = "";
getDirectoriesAndFilesRecursively(rootDirectory);
function getDirectoriesAndFilesRecursively(directory) {
    var directoriesInRoot = fs.readdirSync(directory, { withFileTypes: true }).map(dirent => dirent);
    if (directoriesInRoot.length > 0) {
        directoriesInRoot.forEach(element => {
            var fullPath = path.join(directory, element.name);
            if (element.isDirectory()) {
                getDirectoriesAndFilesRecursively(fullPath);
            } else {
                filesAndDirectoriesList += fullPath + "\n";
            }
        });
    } else {
        filesAndDirectoriesList += directory + "\n";
    }
}
var fileLines = filesAndDirectoriesList.split("\n");
for (var i = 0; i < fileLines.length; i++) {
    var line = fileLines[i];
    line = line.replace(replacer, '" -> "');
    graphString += (line != "") ? '"' + line + '"' + "\n" : "";
}
graphString += "}";
console.log(graphString);
//digraph section ends



//Decoding section starts
console.log(decodeText("Gur havirefr pbafcverf gb uryc gur Qernzre",13));
function decodeText(encodedText, shift) {
    encodedText = encodedText.toLowerCase();
    var decodedText = "";
    var encodedTextArray = encodedText.split("");
    for (var i = 0; i < encodedTextArray.length; i++) {
        var charCode = encodedTextArray[i].charCodeAt(0);
        if (encodedTextArray[i] == " ") {
            decodedText += " ";
        } else {
            var decodedCharCode = charCode + shift;
            if (decodedCharCode > 122) {
                decodedCharCode = decodedCharCode - 26;
            }
            decodedText += String.fromCharCode(decodedCharCode);
        }
    }l̥
    return decodedText;
}
//Decoding section ends