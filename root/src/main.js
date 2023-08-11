console.log('JavaScript file is loaded.');

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
alert("This website is under development if there are any issues please email me at wamnerds@gmail.com");
localStorage.setItem('alerted','yes');
console.log("It worked")
}
else {
    console.log("Already alerted");
}

const { Client, Account, ID } = Appwrite;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64be9ef6649824b39e93');               // Your project ID 

 
// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});