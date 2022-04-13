// Code your solutions in this file

function writeCards(arrayObj, occasion) {
    const messages = [];
    
    for (let i = 0; i < arrayObj.length; i++) {
        messages.push(`Thank you, ${arrayObj[i]}, for the wonderful ${occasion} gift!`);
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}