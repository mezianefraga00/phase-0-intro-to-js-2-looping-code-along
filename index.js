function writeCards() {
  const name = ["Lisa", "Kaitlin", "Jan"];
  const result = [];

  for (let i = 0; i < name.length; i++) {
    //console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    result.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    
    //"Thank you, Ada, for the wonderful birthday gift!",
    debugger;
   
  }
  return result
  }

writeCards();

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

function countDown(){
    let x = 0;
    let n = 10;
    do {
        console.log(n-x);
        x++;
        debugger;
    }
    while (x<=n);

    

}
countDown();