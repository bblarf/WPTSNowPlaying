const axios = require("axios");
getNowPlaying();

function getNowPlaying() {
    axios.get("http://wpts1.wpts.pitt.edu/current.cgi")
        .then(res => {
            let fullInfo = res.data;
            const arrInfo = fullInfo.split(" - ");
            console.log("Now Playing: " + arrInfo[1] + " by " + arrInfo[0]);
        })
        .catch(err => {
            console.log(err);
        })
}
