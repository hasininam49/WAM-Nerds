console.log('JavaScript file is loaded.');

var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
alert("This website is under construction if there are any issues please email me at wamnerds@gmail.com");
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

const account = new Account(client);

// Register User
account.create(
    ID.unique(),
    'thewamnerds.com',
    'WAMnerd@49',
    'Hasini Namaduru'
).then(response => {
    console.log(response);
}, error => {
    console.log(error);
});

client.subscribe('files', response => {
    if (response.events.includes('buckets.*.files.*.create')) {
        // Get the data of the new document
        const document = response.payload;

        // Retrieve each separate attribute of the document
        const name = document.Author;
        const Title = document.Title;
        const email = document.Email;
        const DateTime = document.Date-Time ;
        const content = document.Content;
        const keypoints = document.KeyPoints;

        // Log the data of the new document
        console.log(name, Title, email,DateTime,content,keypoints);
    }
    else{
        console.log("not working");
    }
});
