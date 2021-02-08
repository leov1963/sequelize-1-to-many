const db = require("./models");

// db.user.create({
//     firstName:"Leo",
//     lastName: "Brooks",
//     age: 25,
//     email: "leob@hotmail.net"
// })
// .then(newUser => {
//     // make pet associated with user
//     // createASSOCIATEDMODELNAME()
//     newUser.createPet({
//         name: "Wiggleton",
//         species: "Walrus"
//     })
//     .then ( newDog => {
//         console.log(newDog)
//     })
// })

// db.user.findOne({ where: {id: 1}})
// .then(user=> {
//     //another built in method getTABLEPLURAL
//     user.getPets()
//     .then(allPets => {
//         console.log(allPets[0].name)
//     })
// })