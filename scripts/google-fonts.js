(async () => {
  const download = require("nextjs-google-fonts");
  const fonts = [
    "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
    "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
  ]
  const options = {
    publicFolder: "public", // next.js 'public' folder
    fontsFolder: "assets/fonts", // folder name where data should be saved (fonts+styles)
    styleFolder: "style", // folder with .css from google fonts url
    resetFolder: true, // delete all files from the "fontsFolder" with downloaded data when downloading fonts again
    prevent: true, // prevent download fonts for every your 'npm run dev'
    outputData: {
      name: "data.json", // name of file where be save your data about fonts (for your preverences ;) )
      //path: '../..' , // the path where 'data.json' will be located. If is empty its return 'publicFolder'+'fontsFolder' destination
    },
  }
  await download(fonts, options);
})();