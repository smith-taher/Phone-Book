// var readline = require('readline');
// var fs = require('fs')
// var promisify = require('util').promisify;
// var readFile = promisify(fs.readFile);
// var writeFile = promisify(fs.writeFile);
// // var rlQuestionAsPromise = promisify(rl.question);
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
// var rlQuestionAsPromise = function(question) {
//     return new Promise(function(resolve) {
//         rl.question(question, resolve);
//     });
// };

// rl.question('What do you want to do (1-7)? ', function(answer) {
//     rl.close();
//     if (answer === 1) {
//         lookForEntry(name, number, email);
//     }
//     if (answer === 2) {
//         setEntry(name, number, email);
//     }
// });

// var lookForEntry = function(question) {
//     rl.question('Enter Name: ')
//     fs.readFile(answer, 'utf8', function(err, data) {
//         if (err) throw err;
//         console.log(data);
//     })
// }

// var setEntry = function(question) {
//     rl.question('Add Name: ');
//         then(function(name) {
//             console.log(name);
//             return rl.question("Add Phone Number: ");
//         })
//         .then(function(number) {
//             console.log(number);
//             return rl.question("Add Email Address: ");
//         })
//         .then(function(email) {
//             console.log(email);
//         })   
//     fs.writeFile('contacts.txt', name, number, email, (err) => {
//         if (err) throw err;
//         console.log('Name saved!');
//     });
// };
// END

// var restify = require('restify');
// var builder = require('botbuilder');

// builder.Prompts.choice(session, 'What do you want to do? ', '1. Look up an entry|2. Set an entry|3. Delete and entry|4. List all entries|5. Save entries|6. Restore saved entries|7. Quit', {listStyle: 2});
// Phone book app
// var askFileNameQustion = function (fileName) {
//     rl.question(function ("first name?", askForFirstName) {

//     });
// }

// var askForFirstName = function (firstName, fileName) {
//     console.log(firstName, fileName)
//     fs.writeFile(fileName, firstName);
// }
// rl.qustion('File Name?', askFileNameQuestion);

// correct

// var askQuestions = function(callback) {

// rl.qustion('File Name?', function (fileName) {
//     rl.question('First Name?', function (firstName) {
//         console.log(firstName, fileName);
//         callback(fileName, firstName);
//     });
// });
// }

// //could also write separate function to write to Phonebook
// var writePhonebook(fileName, firstName) {
//     fs.writeFile(fileName, firstName):
// }

// askQustions(writePhonebook);


//USE THIS
var readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // var http = require("http");
// // var contacts = [
// // 	{first: "Jonathan", last: "Martin", email: "jonathan@digitalcrafts.com"}
// // ];

// // var lastId = 0;
// var entries = [];

// var lookupEntry = function () {
//     rl.question('Name:', function (name) {
//         for (var i = 0; i < entries.length; i++) {
//             if (entries[i].name == name) {
//                 console.log('Found entry for ' + name + ' '
//                             + entries[i].number);
//                 mainMenu();
//             }
//         }
//         console.log('No entry found for ' + name);
//         mainMenu();
//     });
// }

// var setEntry = function () {
//     rl.question('First Name:', function (name) {
//         rl.question('Last Name:', function(last) {
//             rl.question('Phone Number:', function(number) {
//                 var contact = {};
//                 contact.name = name;
//                 contact.last = last;
//                 contact.number = number;
//                 entries.push(contact);
//                 console.log('Entry stored for ' + name + last);
//                 mainMenu();
//             });
//         });
//     });
// }

// var deleteEntry = function () {
//     rl.question('Name: ', function (name) {
//         var temp = [];
//         for (var i = 0; i < entries.length; i++) {
//             if (entries[i].name != name) {
//                 temp.push(entries[i]);
//             }
//         }
//         entries = temp;
//         mainMenu();
//     });
// }

// var displayEntries = function () {
//     for (var i = 0; i < entries.length; i++) {
//         console.log('Found entry for ' + entries[i].name + ': ' 
//                     + entries[i].number);
//     }
//     mainMenu();
// }

// var mainMenu = function () {
//     rl.question('Electronic Phone Book\n' +
//              '=====================\n' +
//              '1. Look up an entry\n' +
//              '2. Set an entry\n' +
//              '3. Delete an entry\n' +
//              '4. List all entries\n' +
//              '5. Quit\n' +
//              'What do you want to do (1-5)?\n', function (choice) {
//         parsedInt = parseInt(choice);
//         switch (parsedInt) {
//             case 1:
//                 //console.log('look up entry');
//                 lookupEntry();
//                 break;
//             case 2:
//                 setEntry();
//                 //console.log('set an entry');
//                 break;
//             case 3:
//                 deleteEntry();
//                 //console.log('delete entries');
//                 break;
//             case 4:
//                 displayEntries();
//                 //console.log('list all entries');
//                 break;
//             case 5:
//                 rl.close();
//                 //process.exit(0);
//                 break;
//             default:
//                 console.log('Try again');
//         }
//     });
// }

// mainMenu();

//From Notes
// var http = require("http");
// var contacts = [
//     {
//     id: 0,
//     first: "Jonathan",
//     last: "Martin",
//     phone: "678-513-2353"
//     },
//     {
//     id: 1,
//     first: "Joel",
//     last: "Smith",
//     phone: "470-345-6190"
//     }
// ];
// var lastId = 0;

// var server = http.createServer(function(request, response) {
// 	console.log(request.method, request.url);
// 	// if(request.method === "/contacts") 
// 	if (request.method === "GET") {
//         response.end(JSON.stringify(contacts));
//         console.log(contacts);
//     } else if (request.method === "POST") {
// 	var contact = JSON.parse(body);
// 		request.on("data", function(chunk) {
//         body += chunk.toString();
//         // push.contacts(JSON.stringify(body));
//         response.end(JSON.stringify(body));
//         });
//     }
	// request.on("end", function() {
	// 	var contact = JSON.parse(body);
	// 	contact.id = ++lastId; //allows us to select user by ID
	// 	console.log(contact);
	// 	contacts.push(contact);
	// 	response.end("New contact, Got it!");
	// })
// });
// server.listen(3000);

// RESTFUL 
// GET 	/contants = all contacts
// POST 	/contacts = creates a contact
// GET 	/contacts / id = gets contact by id
// DELETE /contacts id = deletes contact by id
// PUT 	/contacts id = updates contact with new information

// var http = require('http');
// var server = http.createServer(engine);
// var contacts = [
//     {
//     id: 0,
//     first: "Jonathan",
//     last: "Martin",
//     phone: "678-513-2353"
//     },
//     {
//     id: 1,
//     first: "Joel",
//     last: "Smith",
//     phone: "470-345-6190"
//     }
// ];
// server.listen(3000, function() {
//     console.log("Server was hit by a request");

// });

// function engine(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end(JSON.stringify(contacts));
// }
var http = require('http');
var contacts = 
[
    {
        id: 0,
        first: 'Jonathan',
        last: 'Martin',
        phone: '7704560987'
    },
    {
        id: 1,
        first: 'Joel',
        last: 'Smith',
        phone: '4703456190'
    }
];
var lastId = 0;
var findContact = function(id) {
    id = parseInt(id, 10);
    return contacts.find(function(contact) {
        return contact.id === id;
    });
};

var deleteContact = function(contactToDelete) {
    contacts = contacts.filter(function(contact) {
        return contact !== contactToDelete;
    });
};

var readBody = function(request, callback) {
    var body = '';
    request.on('data', function(chunk) {
        body += chunk.toString();
    });
    request.on('end', function() {
        callback(body);
    });
};

var matches = function(request, method, path) {
    return request.method === method &&
        request.url.startsWith(path);
};

var getSuffix = function(fullUrl, prefix) {
    return fullUrl.slice(prefix.length);
};

var getContacts = function(request, response) {
    response.end(JSON.stringify(contacts));
};

var postContacts = function(request, response) {
    readBody(request, function(body) {
        var contact = JSON.parse(body);
        contact.id = ++lastId;
        console.log(contact);
        contacts.push(contact);
        response.end('Created contact!');
    });
};

var deleteContact = function(request, response) {
    var id = getSuffix(request.url, '/contacts/');
    var contact = findContact(id);
    deleteContact(contact);
    console.log(contact);
    response.end('Deleted contact!');
};

var getContact = function(request, response) {
    var id = getSuffix(request.url, '/contacts/');
    var contact = findContact(id);
    response.end(JSON.stringify(contact));
};

var putContact = function(request, response) {
    var id = getSuffix(request.url, '/contacts/');
    var contact = findContact(id);
    readBody(request, function(body) {
        var newParams = JSON.parse(body);
        Object.assign(contact, newParams);
        response.end('Updated contact!');
    });
};

var notFound = function(request, response) {
    response.statusCode = 404;
    response.end('404, nothing here!');
};

var routes = [
{ method: 'DELETE', path: '/contacts/', handler: deleteContact },
{ method: 'GET', path: '/contacts/', handler: getContact },
{ method: 'PUT', path: '/contacts/', handler: putContact },
{ method: 'GET', path: '/contacts', handler: getContacts },
{ method: 'POST', path: '/contacts', handler: postContacts }
];

var server = http.createServer(function(request, response) {
    console.log(request.method, request.url);
    var route = routes.find(function(route) {
        return matches(request, route.method, route.path);
    });
    (route ? route.handler : notFound)(request, response);
});
server.listen(3000);
