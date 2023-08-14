import fs from 'fs';
import _ from 'lodash';

export function readTextFile(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(1)
        console.log(data);
    });
}

readTextFile('./randomText.txt');

export function readLEN(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(2)
        console.log(_.words(data).length);
    });
}
readLEN('./randomText.txt');


export function readReverse(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        const reversedData = data.split('').reverse().join('');
        console.log(3)
        console.log(reversedData);
    });
}
readReverse('./randomText.txt');


export function withoutCefel(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        const words = _.words(data);
        const uniqueWords = _.uniq(words);
        console.log(4)
        console.log(uniqueWords.join(" "));
    });
}
withoutCefel('./randomText.txt');


export function numWithoutCefel(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        const words = _.words(data);
        const uniqueWords = _.uniq(words);
        console.log(5)
        console.log(uniqueWords.length);
    });
}
numWithoutCefel('./randomText.txt');



export function bigLetters(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        const words = _.words(data); //הופך מחרוזת למערך
        const uniqueWords = _.uniq(words);//ללא כפילויות
        console.log(6)
        let capitalizedWords = uniqueWords.map(word => word.toUpperCase());
        fs.appendFile('message.txt', String(capitalizedWords)+ '\n', (err) => {
            if (err) throw err;
            });
    });
}
bigLetters('./randomText.txt');

export function bigLettersBigger5(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) throw err;
        const words = _.words(data); //הופך מחרוזת למערך
        const uniqueWords = _.uniq(words);//ללא כפילויות
        console.log(7)
        const filterWords = uniqueWords.filter(word => word.length>5);
        let capitalizedWords = filterWords.map(word => word.toUpperCase());

        fs.appendFile('message.txt', String(capitalizedWords), (err) => {
            if (err) throw err;
            });
    });
}
bigLettersBigger5('./randomText.txt');
const moduleFunction = bigLettersBigger5(filename)
module.exports = moduleFunction



