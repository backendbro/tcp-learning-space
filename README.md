# tcp-learning-space
This is a TCP server that demonstrates how transport layer works using telnet protocol.

## Tech stack 
- node:net => This is core node module that provides an asynchronous network API for creating stream-based TCP or IPC servers and clients.
  
  > node documentation: https://nodejs.org/api/net.html

## Usage 
- To get started, you need to clone the git repository onto your local machine by using the following command: `git clone https://github.com/backendbro/tcp-learning-space`
> No external dependency was used for this project. However, you can install nodemon to watch your server.
- Open your terminal and run the application using `npm run start`
  ![tcp-run-start](https://github.com/backendbro/tcp-learning-space/assets/85031254/c08d095b-2590-48d3-b32d-8f05de556a9f)
- To establish a TCP connection, open a command prompt and type: `telent 127.0.0.1 8080`
   ![telnet](https://github.com/backendbro/tcp-learning-space/assets/85031254/60cb540a-4e43-4ea6-b562-4fed3347733b)

  > Where:
      **127.0.0.1** Is our local machine. While, **8080** Is the designated PORT
-  Enter a response and press the **ENTER** key to proceed
  ![telent-reponse](https://github.com/backendbro/tcp-learning-space/assets/85031254/cea03cba-108a-4ccb-a054-063ecdcc4d1b)
-  Return to the application's terminal to view the **RESPONSE**
  ![tcp-response](https://github.com/backendbro/tcp-learning-space/assets/85031254/2c040a1d-e26f-47c1-92dc-c076011ed6a6)

