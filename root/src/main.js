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



const { Client, Databases, Query } = Appwrite;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64be9ef6649824b39e93'); // Your project ID

const databases = new Databases();

const collectionId = '64bea007467268695d2a'; // Replace 'your-collection-id' with the actual collection ID

databases.listDocuments(collectionId, [
    Query.equal('title', 'Avatar'), // Use Query.equal() for equal conditions
    Query.select([
        'Author',
        'Title',
        'Date_Time', // Change to camelCase or any valid variable name
        'Email',
        'Content',
        'KeyPoints'
    ])
], {
    limit: 10,
    offset: 0,
    orderField: 'createdAt', // Specify the field to be used for sorting
    orderType: 'desc' // Specify the sorting order, 'desc' for descending, 'asc' for ascending
}).then(response => {
    if (response.documents) {
        response.documents.forEach(document => {
            const author = document.Author;
            const title = document.Title;
            const dateTime = document['Date_Time']; // Use square brackets to access properties with hyphens
            const email = document.Email;
            const content = document.Content;
            const keyPoints = document.KeyPoints;

            console.log(author, title, dateTime, email, content, keyPoints);
        });
    } else {
        console.log('No documents found');
    }
}).catch(error => {
    console.log(error);
});
