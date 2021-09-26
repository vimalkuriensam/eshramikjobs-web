const path = require("path");
const https = require("https");
const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "public");
const certPath = path.join(__dirname, "..", "certification");

app.disable("etag");

app.get("/*", function (req, res, next) {
  res.setHeader("Last-Modified", new Date().toUTCString());
  next();
});

app.use(express.static(publicPath));

app.get("*", (req, res) => res.sendFile(path.join(publicPath, "index.html")));

app.listen(port, () => console.log(`Server is listening on ${port}`));
// https
//   .createServer(
//     {
//       key: fs.readFileSync(`${certPath}/key.pem`),
//       cert: fs.readFileSync(`${certPath}/cert.pem`),
//       passphrase: "Kickassyou12",
//     },
//     app
//   )
//   .listen(port, () => console.log(`Server is listening on port ${port}`));

// const options = {
//   key: fs.readFileSync(`${certPath}/key.pem`),
//   cert: fs.readFileSync(`${certPath}/cert.pem`),
//   passphrase: "Kickassyou12",
// };

// const httpsServer = https.createServer(options, app);

// httpsServer.listen(port, () =>
//   console.log(`Server is listening on port ${port}`)
// );
