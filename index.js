/// UPDATE SETTINGS BELOW

const searchPath = '/home/user/shares/MOVIE' // needs the entire path to your share, run this script one share at a time
const searchRegex = /home\/user/;   // a pattern to search for in the path - it should be unique, don't search for words that may be contained somewhere within your share like `x264`
const replaceString = "mnt\/data"  // what to replace that searched string with



/// DO NOT UPDATE ANYTHING BELOW


const settings = require('./settings');
const { fdir } = require("fdir");
const API = require("airdcpp-apisocket");
const w3cwebsocket = require("websocket").w3cwebsocket;
const cliProgress = require('cli-progress');

// get the Console class
const { Console } = require("console");
// get fs module for creating write streams
const fs = require("fs");

// make a new logger
const myLogger = new Console({
  stdout: fs.createWriteStream("output.log"),
  stderr: fs.createWriteStream("failed_requests.log"),
});

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// create a new progress bar instance and use shades_classic theme
const progressB = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);


(async () => {

  const socket = API.Socket(settings, w3cwebsocket);
  await socket.connect();

  // create the builder
  const api = new fdir().withFullPaths().crawl(searchPath);

  // get all files asynchronously
  api.withCallback(async (err, files) => {
    // iterate over all files

    // start the progress bar with a total value of total files and start value of 0
    progressB.start(files.length, 0);

    for (const file of files) {
      await socket.post('hash/rename_path', {
        old_path: file.replace(searchRegex, replaceString),
        new_path: file
      }).then(
        // update progress bar
        progressB.increment()
      ).catch((err) => {
        myLogger.error(`${err.code} ${err.message}`)
      })
    }

  });


})();