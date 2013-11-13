# SiteCatalyst Tracking
You can find many samples & demo codes here
## Youtube Video Tracking Plugin
Use Youtube API to tracking video data. It supports:
- iframe embeded video player
- object embeded video player
### Get start:
1.Place youtube_plugin.js in your scode.js
2.Embed YouTube iframe video on your web page
```html
<iframe id="player" src="http://www.youtube.com/embed/videoid?enablejsapi=1"></iframe>
3.Enable s.Media
```javascript
s.loadModule('Media');
s.Media.autoTrack=true;
s.Media.trackVars="eVar38,prop30,events";
s.Media.trackEvents="event25,event75,event76";
s.Media.trackUsingContextData = true;
s.Media.trackSeconds=6;
s.Media.contextDataMapping = {
    "a.media.name":"eVar38,prop30",
    "a.media.view":"event25",
    "a.media.complete":"event76",
    "a.media.timePlayed":"event75"
};