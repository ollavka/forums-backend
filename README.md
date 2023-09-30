# 🚀 API Documentation
Welcome to the documentation for our GraphQL API. This API provides access to various resources, including users, forums, and messages. Below, you'll find detailed information about the types, queries, and mutations available in our API.

## 🌐 Functionality
* [Types](#types)
* [Queries](#queries)
* [Mutations](#mutations)
* [Technologies](#tech)
* [How to get started](#start)

<span id="types"></span>

## 🔍 Types
* ### User: Represents a user in our system.
    * **id** (ID!): The unique identifier for the user.
    * **name** (String!): The name of the user.
    * **username** (String!): The username of the user.
    * **phone** (String): The phone number of the user.
    * **email** (String!): The email address of the user.
    * **photo** (String): The URL of the user's photo.
    * **forumIds** ([ID]!): The IDs of the forums the user has joined.
* ### Forum: Represents a forum for discussions.
    * **id** (ID!): The unique identifier for the forum.
    * **name** (String!): The name of the forum.
    * **userIds** ([ID]!): The IDs of the users who have joined the forum.
* ### Message: Represents a message in a forum.
    * **id** (ID!): The unique identifier for the message.
    * **text** (String!): The content of the message.
    * **senderId** (ID!): The ID of the user who sent the message.
    * **forumId** (ID!): The ID of the forum where the message was posted.
    * **timestamp** (String!): The timestamp when the message was sent.
* ### UsersResult: Represents the result of a query for users.
    * **users** ([User]!): The list of users.
    * **error** (String): An error message, if applicable.
* ### JoinForumResult: Represents the result of a mutation to join a forum user.
    * **success** (Boolean!): Result of user joining the forum (true or false)
    * **error** (String): An error message, if applicable.
* ### CreateForumResult: Represents the result of a mutation to create a new forum.
    * **forum** (Boolean!): A forum object that has been created.
    * **error** (String): An error message, if applicable.
* ### PostMessageResult: Represents the result of a mutation to create a new forum post.
    * **message** (Boolean!): A message object that has been created.
    * **error** (String): An error message, if applicable.

<span id="queries"></span>

## 📤 Queries
* ### users: Get a list of all users
    * Query:
    ```graphql
    query Get_Users {
      users {
        id
        name
        username
        phone
        email
        photo
        forumIds
      }
    }
    ```
    * Response:
    ```json
    {
  "data": {
        "users": [
          {
            "id": "1",
            "name": "Leanne Graham",
            "username": "Bret",
            "phone": "1-770-736-8031 x56442",
            "email": "Sincere@april.biz",
            "photo": "https://api.dicebear.com/7.x/avataaars/svg?seed=Bret",
            "forumIds": [
              "1"
            ]
          },
          {
            ...
          }
        ]
      }
    }
    ```
<br />

* ### user: Get a user by ID.
    #### Fields:
    **id** (ID): User ID.

    * Query:
    ```graphql
    query Get_User {
      user(id: "3") {
        id
        name
        username
        phone
        email
        photo
        forumIds
      }
    }
    ```
    * Response:
    ```json
    {
      "data": {
        "user": {
          "id": "3",
          "name": "Clementine Bauch",
          "username": "Samantha",
          "phone": "1-463-123-4447",
          "email": "Nathan@yesenia.net",
          "photo": "https://api.dicebear.com/7.x/avataaars/svg?seed=Samantha",
          "forumIds": [
            "3"
          ]
        }
      }
    }
    ```

<br />

* ### usersByForum: Get users by forum ID. Also returns the text of the error if it occurred
    #### Fields:
    **forumId** (ID): The forum ID of the forum being searched

    * Query:
    ```graphql
    query Get_Users_By_Forum {
      usersByForum(forumId: "4") {
        users {
          id
          name
          username
          phone
          email
          photo
          forumIds
        }
        error
      }
    }
    ```
    * The response is with success:
    ```json
    {
      "data": {
        "usersByForum": {
          "users": [
            {
              "id": "6",
              "name": "Mrs. Dennis Schulist",
              "username": "Leopoldo_Corkery",
              "phone": "1-477-935-8478 x6430",
              "email": "Karley_Dach@jasper.info",
              "photo": "https://api.dicebear.com/7.x/avataaars/svg?seed=Leopoldo_Corkery",
              "forumIds": [
                "4"
              ]
            }
          ],
          "error": null
        }
      }
    }
    ```
    * The response is with error (invalid forum ID):
    ```json
       {
          "data": {
            "usersByForum": {
              "users": [],
              "error": "No such forum was found."
            }
          }
        }
    ```

<br />

* ### messages: Get a list of messages starting with the most recent.
    #### Fields:
    **messageText** (String): Message text by which suitable messages are filtered (optional)

    * Query:
    ```graphql
   query Get_Messages {
      messages(messageText: "chat") {
        id
        text
        senderId
        forumId
        timestamp
      }
    }
    ```
    * Response:
    ```json
    {
      "data": {
        "messages": [
          {
            "id": "7",
            "text": "General Chat message.",
            "senderId": "5",
            "forumId": "2",
            "timestamp": "2023-09-29T21:40:58.936Z"
          }
        ]
      }
    }
    ```

<br />

* ### message: Get a message by ID.
    #### Fields:
    **id** (ID): Message ID.

    * Query:
    ```graphql
    query Get_Message {
      message(id: "1") {
        id
        text
        senderId
        forumId
        timestamp
      }
    }

    ```
    * Response:
    ```json
    {
      "data": {
        "message": {
          "id": "1",
          "text": "Hello, everyone!",
          "senderId": "1",
          "forumId": "1",
          "timestamp": "2023-09-25T00:05:41.686Z"
        }
      }
    }
    ```

<br />

* ### forums: Get a list of forums.
    #### Fields:
    **userId** (ID): User ID for which the forums are searched (optional). Without this parameter, all forums will return

    **joinedOnly** (Boolean): A boolean value that is used to sort the forums: if true, it will return forums that the user has already joined, otherwise it will return forums that are available to the user (optional, false by default). Ignored if userId has not been reassigned.

    **forumName** (String): The text that appears in the forum title is needed to filter specific forums by name. (optional, empty string by default).

    * Query:
    ```graphql
   query Get_Forums {
      forums(userId: "1", joinedOnly: true, forumName: "tech") {
        id
        name
        userIds
      }
    }

    ```
    * Response:
    ```json
    {
      "data": {
        "forums": [
          {
            "id": "1",
            "name": "Tech Discussion",
            "userIds": [
              "1",
              "2",
              "8"
            ]
          }
        ]
      }
    }
    ```

<br />

* ### forum: Get a forum by ID.
    #### Fields:
    **id** (ID): Forum ID.

    * Query:
    ```graphql
    query Get_Forum {
      forum(id: "4") {
        id
        name
        userIds
      }
    }

    ```
    * Response:
    ```json
    {
      "data": {
        "forum": {
          "id": "4",
          "name": "Science and Technology",
          "userIds": [
            "6",
            "10"
          ]
        }
      }
    }
    ```

<br />

<span id="mutations"></span>

## 🔄 Mutations
* ### joinToForum: Join a user to a forum.
    #### Fields:
    **userId** (ID!): User ID of the user who is joining the forum.

    **forumId** (ID!): ID of the forum the user is trying to join

    * Mutation:
    ```graphql
    mutation Join_To_Forum {
      joinToForum(userId: "1", forumId: "5") {
        success
        error
      }
    }
    ```
    * Response (if the user has successfully joined):
    ```json
   {
      "data": {
        "joinToForum": {
          "success": true,
          "error": null
        }
      }
    }
    ```
    * Response (if a user tries to join a forum they are already a member of.):
    ```json
   {
      "data": {
        "joinToForum": {
          "success": false,
          "error": "User already joined the forum"
        }
      }
    }
    ```

<br />

* ### createForum: Create a new forum. The user who creates it automatically becomes a member of it.
    #### Fields:
    **userId** (ID!): The ID of the user who creates the forum.

    **forumName** (String!): New forum name join

    * Mutation:
    ```graphql
   mutation Create_Forum {
      createForum(userId: "1", forumName: "New Forum") {
        forum {
          id
          name
          userIds
        }
        error
      }
    }
    ```
    * Response (if the user has successfully created a new forum):
    ```json
    {
      "data": {
        "createForum": {
          "forum": {
            "id": "6",
            "name": "New Forum",
            "userIds": [
              "1"
            ]
          },
          "error": null
        }
      }
    }
    ```

    * Response (if a forum by that name already exists):
    ```json
    {
      "data": {
        "createForum": {
          "forum": null,
          "error": "A forum by that name already exists"
        }
      }
    }
    ```

<br />

* ### postMessage: Post a message in a forum.
    #### Fields:
    **userId** (ID!): The ID of the user who creates the message.

    **forumId** (ID!): The ID of the forum on which the message is posted

    **text** (String!): Message text.

    * Mutation:
    ```graphql
   mutation Post_Message {
      postMessage(forumId: "1", userId: "1", text: "Hello, World!") {
        message {
          id
          text
          senderId
          forumId
          timestamp
        }
        error
      }
    }
    ```
    * Response:
    ```json
    {
      "data": {
        "postMessage": {
          "message": {
            "id": "14",
            "text": "Hello, World!",
            "senderId": "1",
            "forumId": "1",
            "timestamp": "2023-09-30T19:49:24.829Z"
          },
          "error": null
        }
      }
    }
    ```

<br />

<span id="tech"></span>

## 💫 Technologies
* Node.js
* TypeScript
* GraphQL
* Apollo-server-express
* Express

<span id="start"></span>

# 🏃 How to get started
To start the server, follow these rules, navigate to the project directory in your terminal:<br/>
* Clone repo: `https://github.com/ollavka/forums-backend.git`<br />
* Install dependencies: `npm install` or `yarn install` <br />
* Run the server (in development mode): `npm run dev` or `yarn dev` <br />
* Run the server: `npm start` or `yarn start` <br />
* Your server is ready at the link: http://localhost:4000/graphql<br />

Feel free to interact with the GraphQL Playground to explore more queries and mutations. 👍
