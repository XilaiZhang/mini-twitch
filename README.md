# mini-twitch
a mini version of twitch (live streaming web app) built with react, redux, json-server and rtmp-server <br>
user can stream using OBS and audience will be able to watch live stream from the browser <br><br>

to run the app, run 'npm start' in all three directories (api, client, rtmpserver) to start up react, <br>
json-server and rtmpserver respectively. Now streamer can stream using OBS to 'rtmp://localhost/live' and <br>
provide a key that matches the id of the stream-ID. Audience and then watch the live stream in the react app <br>
where stream-ID is rendered. <br>
Users can log in via google auth, CRUD (create, read, update and delete) streams.
