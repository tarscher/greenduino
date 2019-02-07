const list = document.querySelector

db.collection('loggings').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })
})

function writeTemperatureData(value) {
    var k = firebase.database().ref().child('loggings').push().key;
    firebase.database().ref('loggings/'+k).set({
        Type: "temperature",
        Value: value});
}