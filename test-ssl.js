const got = require('got');
const fs = require('fs');

(async () => {
  try {
    const downloadStream = got.stream('https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar');
    downloadStream
      .once('response', () => {
        downloadStream.on('downloadProgress', ({ transferred, total }) => {
          console.log('tick');
        });
      })
      .once('finish', () => {
        console.log('finish');
      })
      .once('end', () => {
        console.log('end');
      })
      .once('error', (err) => {
        console.log('error');
      });
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
})();
