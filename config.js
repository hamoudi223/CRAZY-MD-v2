const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '22395064497'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/hamoudi223/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/bwaby_6.0' // add your username
global.sudo = process.env.SUDO || 'null'
global.devs = '22395064497';
global.website = 'https://github.com/hamoudi2230/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f474ba065bf94f379c6f.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? CRAZY-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lKR3luMUpRU3VXYk8wN09ET1hGSnF3VWRTUmZ0c0t6bWhjUkxVMGFFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0tBSnpyWStiMURqUVBDbHpybVFZM0xzMS9tcktpZDEwL3dyZG1BNEprQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T2FjUUxNYUN3OWhPaGJ0c2FPWWo1U0ZNRCtpb1F6R2VaeGhaa1FCcTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5blk2SUczWmEyMVBwR1kycU1UajI3d0VmS1FEb2Vzc2ZuQW1KdndVblZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIdlpNZVk4K2NKMHVaT3RpSTMwSDFDZ3J3SzBDT21MWm1hdmR6ckswbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkthYlR3LzlDK0lvSnJsQUVvWWdPRERYTkRQbVhmbnRrQ0JHd1BuMzVjMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUsweDExUCtpcjFwMndPSlJML2NrVk1NdW9YN0NHYVVoeDd4S3Fwalcxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFJhd1FHUkphOXo1NllIUkdad2FzM2lTSjlPeXc1Q0MwQlJORzlmeVdGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhnM3ZybUhmRHZuV1N0QmJFVWxPZFhEa1JUU0MzY1pBZHdZSVUxSVZ2NUkzbUxpa2svblYrdUNGczNPSnIvd1hCcjRIWVdDK1dhZlp6dEVCdnFmTkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJlWEhJWi80NzRFRXRjUk9RdWNNdkpCVWVZcEtRWDlkVzJ2dk9uZ1dlZG5zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVbTdTejZISFRFQ09qQVprM1BpSHZnIiwicGhvbmVJZCI6ImZhMGEyMmZlLTI1MjAtNDFiMC05YThkLTE1OTM3NWYxODZiNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOHlQTCt2TFZ1Y0NLaHR3TEVTbC93Mmw3aW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDJsb1hNTExWOEQrMnFGKzhYRWtRVC83ZDhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM5REFHWkNYIiwibWUiOnsiaWQiOiIyMjM5NTA2NDQ5Nzo0M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExvdDlFQkVLM0xtN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUmEyRXY2QitXUWxzck1rZjNKN3FhUnBiQW8vT3hPSG8vN3RoSjlOUkRrST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYXM3bXl5N1V4UDlyNytGcXZHSURVT3Z4ZXR2QzJmREs1QW42VTRHTmtRN0Y1Sk1SMXZVSEJlQ1lMcWp0RUFiTURkNFdsOXI0UHArUmhoT01mbnUzZ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1JTWdJUVBTYmxMQ1lZaVZSVk1MSnpyVTBGdzF4dEg5L1lJZjVHSDNyUFdxRGprMHIyeUgyZm1rS2VzN004T1ovZkJ2d0VkWlU2bk9xZzh6cW42OEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIzOTUwNjQ0OTc6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVd0aEwrZ2Zsa0piS3pKSDl5ZTZta2FXd0tQenNUaDZQKzdZU2ZUVVE1QyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjEzODE2fQ== : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Secktor-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
