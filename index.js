const axios = require("axios")
const fs = require('fs')
getNowPlaying();
setInterval(getNowPlaying, 10000);
function getNowPlaying() {
    axios.get("http://wpts1.wpts.pitt.edu/current.cgi")
        .then(res => {
            fs.writeFile('nowplaying.txt', '', (err) => {
                if (err) throw err;
                else{
                    console.log('new change at ' + Date.now());
                }
            })
            let fullInfo = res.data;
            const arrInfo = fullInfo.split(" - ");
            let textOutput = "Now Playing: '" + arrInfo[1] + "' by " + arrInfo[0];
            fs.writeFile('nowplaying.txt', textOutput, (err) => {
                if (err) throw err;
            })
        })
        .catch(err => {
            console.log(err);
        })
}
