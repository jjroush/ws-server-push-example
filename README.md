# ws-server-push-example

This simple example of creating a WebSocket server that allows data to be pushed data to a client. 

# Using
First we need a client to receive the data. The easiest way to setup a client is by using a browser plugin. I like Simple WebSocket Client.

Simple WebSocket Client
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/simple-websocket-client/)
- [Chrome](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo)

Otherwise there isn't too much code involved in [creating a client](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications).

 After starting the server, start/setup your client. Then you type into the running server terminal. Upon hitting enter, you should see messages popping up on the client.