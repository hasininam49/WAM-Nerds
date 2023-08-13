console.log('JavaScript file is loaded.');

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
alert("This website is under development if there are any issues please email me at thewamnerds@gmail.com");
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

const apiKey = 'd2cd026e1305d726ca0b3ca6abeb96544a2bee9bf52020bad9e73664a23bd851360db305158f50bccf93d14e0a95daf7917f0bd2736082532e6e9f6b92577be053766995ad2554adb58c204e7a7bbde26799a0851d750f2d867f8de26b30585fb6b07cd6a0b176bac32c48a67c1dd844d182f225035c917419e69866882d8b5e'; // Replace with your actual API key
const collectionId = '64bea007467268695d2a'; // Replace with your collection ID
const buttonContainer = document.getElementById('button-container');
const socket = new WebSocket('wss://api.appwrite.io/v1/live');

socket.onopen = () => {
  socket.send(JSON.stringify({ "key": apiKey }));
};

socket.onmessage = event => {
  const message = JSON.parse(event.data);
  
  if (message.event === 'documents.create') {
    const newDocument = message.payload;
    createButton(newDocument);
  }
};

function createButton(document) {
  const button = document.createElement('button');
  button.textContent = document.title; // Assuming you have a 'title' field in your document
  button.addEventListener('click', () => {
    // You can use 'document' data for further actions if needed
    console.log('Button clicked with data:', document);
  });
  buttonContainer.appendChild(button);
}
