// const names = [];
// const event = "birthday";

// function writeCards(names, event) {
//        for (let i = 0; i < names.length; i++) {
//         names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
       
//        };
//     return names;
//     };

  // function countDown(finalNumber){
  //   while (finalNumber >= 0) {
  //       console.log(finalNumber--);
  //   }
  // }




  function writeCards(names, party){
    const surprise = [];
    for (let i = 0; i < names.length; i++) {
    const newString = (`Thank you, ${names[i]}, for the wonderful ${party} gift!`)
    surprise.push(newString);
    }
    return surprise;
}