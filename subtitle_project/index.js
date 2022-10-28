// import fs from "fs";

// console.log(fs);

// // const folderContents = fs.readdirSync("back_to_the_future_dutch");
// const folderToRead = process.argv[2];


// if(!fs.existsSync(folderContents)){
//     throw "folder could not be found";
// }
// const folderContents = fs.readdirSync(folderToRead);
// let allContent = "";

// for (let index = 0; index < folderContents.length; index++) {
//   allContent += fs.readFileSync(
//     (folderToRead + "/" + folderContents[index])
//   );
// }

// // allContent = allContent.replace(/[^a-z]/gi," "); // alle niet letters vervangen ddoor een spatie ^
// // allContent = allContent.replace(/font|color/gi," ")
// // allContent = allContent.replace(/ +/g," ").toLocaleLowerCase().split(" "); // meerdere spaties verwijderen

// allContent = allContent
//   .replace(/[^a-z]/gi, " ")
//   .replace(/font|color/gi, " ")
//   .replace(/ +/g, " ")
//   .toLocaleLowerCase()
//   .split(" ")
//   .filter(function (woord) {
//     return woord.length >= 4;
//   });

// console.log(allContent);


// const woordenMetAantalVoorkomen = allContent.reduce(function (obj,woord){
//    obj[woord] = obj[woord] + 1 || 1;
//    return obj;
// },{});



// const uniqueWords = Object.keys(woordenMetAantalVoorkomen); //object.keys linker kant van array , object.value rechter kant

// uniqueWords.sort(function(woordA,woordB){
// return woordenMetAantalVoorkomen[woordB] - woordenMetAantalVoorkomen[woordA];

// });

// console.log(uniqueWords);


import fs from "fs";

const folderToRead = process.argv[2];

if (!fs.existsSync(folderToRead)) {
  console.log("Folder could not be found !!!");
} else {
  const folderContents = fs.readdirSync(folderToRead);
  let allContent = "";
  for (let i = 0; i < folderContents.length; i++) {
    allContent += fs.readFileSync(folderToRead + "/" + folderContents[i]);
  }
  allContent = allContent
    .replace(/[^a-z]/gi, " ")
    .replace(/font|color/gi, " ")
    .replace(/ +/g, " ")
    .toLowerCase()
    .split(" ")
    .filter(function (word) {
      return word.length >= 4;
    });

  const wordsWithOccurrence = allContent.reduce(function (obj, word) {
    obj[word] = obj[word] + 1 || 1;
    return obj;
  }, {});

  const uniqueWords = Object.keys(wordsWithOccurrence);

  uniqueWords.sort(function (wordA, wordB) {
    return wordsWithOccurrence[wordB] - wordsWithOccurrence[wordA];
  });

  console.log(uniqueWords);
}







