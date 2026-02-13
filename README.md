# REAL-TIME-CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: GOPIKA S

*INTERN ID*: CTIS2386

*DOMAIN*: FRONT END DEVELOPMENT

*DURATION*: 4 WEEEKS

*MENTOR*: NEELA SANTOSH

Real-Time Chat Application – Project Description

The Real-Time Chat Application is a web-based communication system that allows users to send and receive messages instantly over the internet. This project was developed to demonstrate real-time communication using WebSockets along with a modern front-end framework. The application is built using React.js for the user interface and Node.js with Express.js for the backend server. Real-time data transmission is achieved using the Socket.IO library, which enables WebSocket communication between the client and server.

The main objective of this project is to build a responsive chat interface that allows multiple users to communicate at the same time without refreshing the page. In traditional web applications, communication happens through repeated requests and responses between the client and server. However, in this project, WebSockets are used to create a continuous two-way connection. This allows messages to be sent and received instantly, improving speed and user experience.

The application follows a client-server architecture. The frontend is developed using React.js, which helps in creating a dynamic and interactive user interface. React manages the state of the application, including the username, message input, and chat history. The backend is developed using Node.js and Express.js. The server listens for incoming connections and handles real-time communication using Socket.IO.

When a user opens the application, they are first asked to enter a username. After entering their name, they join the chat interface. At this stage, the React client establishes a WebSocket connection with the backend server running on a specific port. This connection remains active as long as the user is connected.

When a message is sent, the following steps occur:

The user types a message and clicks the send button.

The React client sends the message to the server using a WebSocket event.

The server receives the message and stores it in memory to maintain message history.

The server then broadcasts the message to all connected users.

Each connected client receives the message instantly and updates the chat interface.

This process ensures that communication happens in real time without reloading the page.

The chat interface is designed to be simple, clean, and responsive. Messages are displayed in a chat bubble format to make the conversation easy to read. Messages sent by the current user appear on the right side of the screen, while messages from other users appear on the left side. Each message shows the sender’s username and a properly formatted timestamp displaying the time in hours and minutes. This improves clarity and user interaction.

One important feature of this application is message history. The server temporarily stores messages in memory during runtime. When a new user joins the chat, the server sends the previously stored messages so that the new user can see earlier conversations. This maintains continuity and ensures that no messages are missed while the server is running.

Another feature included in the application is a reply option. Users can click a reply button under another user’s message to quickly respond. This enhances interaction and makes the chat more organized.

The application is also responsive, meaning it adjusts properly to different screen sizes. The layout and design ensure that the chat interface works smoothly on desktops and smaller screens.

Overall, this Real-Time Chat Application successfully meets the project requirements. It demonstrates the practical implementation of WebSockets for instant communication and integrates frontend and backend technologies effectively. The project provides hands-on experience with full-stack development, event-driven programming, and real-time data handling.

In conclusion, the application fulfills all the required objectives by delivering a functional, responsive, and real-time chat system. It showcases the ability to build a modern web application using React.js, Node.js, and WebSocket technology while maintaining simplicity and usability.

