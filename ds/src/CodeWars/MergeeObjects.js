/*Task 1
Consider the example below
You have an object of 2 arrays coming from the server. An array of all users, and an array of all messages.

const data = {
  users: [
    {
      id: Int,
      name: String,
    },
    ...
  ],
  messages: [
    {
      id: Int,
      text: String,
      userId: Int,
      receiverId: Int,
    },
    ...
  ],
};

Write a function which iterates through received data and returns a 
single array with data in the format: [{ messageText, userFromName, userToName }]
*/

function normalizeReceivedData(receivedData) {
    let usersAre = {}
    receivedData.users.forEach(user => {
        if (!usersAre[user.id]) usersAre[user.id] = {};
        usersAre[user.id].name = user.name;
    });

    let messagesArray = receivedData.messages.map((message) => {
        return ({
            'messageText': message.text,
            'userFromName': usersAre[message.userId].name,
            'userToName': usersAre[message.receiverId].name
        });

    });

    return messagesArray;

}
console.log(normalizeReceivedData( {
    users: [
        {
            id: 1,
            name: 'Suju',
        },
        {
            id: 2,
            name: 'Kiren',
        }

    ],
    messages: [
        {
            id: 1,
            text: 'String',
            userId: 1,
            receiverId: 2,
        }
    ],
}))

// Bonus
// Consider that there could be millions of messages and thousands of users. How could you improve the solution in order to optimize for performance?