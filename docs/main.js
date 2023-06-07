


var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
alert("This website is under construction if there are any issues please email me at wamnerds@gmail.com");
localStorage.setItem('alerted','yes');
console.log("It worked")
}
if (alerted != 'no') {
    console.log("Already alerted");
}

