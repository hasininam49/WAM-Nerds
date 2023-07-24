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
const { Client, Databases, Query } = Appwrite;
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64be9ef6649824b39e93');               // Your project ID

const account = new Account(client);


// Register User
account.create({
    id: ID.unique(),
    email: 'thewamnerds@gmail.com',
    password: 'WAMnerd@49',
    name: 'Hasini Namaduru'
}).then(response => {
    console.log(response);
}, error => {
    console.log(error);
});

client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});


const databases = new Databases(client);

database.listDocuments('collection', [
    Query.equal('title', 'Avatar'),
    Query.orderBy('createdAt', 'desc'),
    Query.select([
        'Author',
        'Title',
        'Date-Time',
        'Email',
        'Content',
        'KeyPoints'
    ])
], {
    limit: 10,
    offset: 0
}).then(response => {
    if (response.documents) {
        response.documents.forEach(document => {
            const author = document.Author;
            const title = document.Title;
            const dateTime = document.Date-Time;
            const email = document.Email;
            const content = document.Content;
            const keyPoints = document.KeyPoints;

            console.log(author, title, dateTime, email, content, keyPoints);
        });
    }
    else {
        console.log('No documents found');
    }
}).catch(error => {
    console.log(error);
});