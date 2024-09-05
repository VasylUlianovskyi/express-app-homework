const http = require('node:http');
// const fs = require('node:fs');

const app = require('./app.js');
// const path = require('path');

const PORT = process.env.PORT ?? 5000;

/// readdir

// const server = http.createServer((req, res) => {
//   fs.readdir(__dirname, { encoding: 'utf-8' }, (err, files) => {
//     if (err) {
//       res.statusCode = 500;
//       return res.end('Read file error');
//     }
//     res.statusCode = 200;
//     res.end(JSON.stringify(files));
//   });
// });

// readdirSync

// const server = http.createServer((req, res) => {
//   try {
//     const files = fs.readdirSync(__dirname, { encoding: 'utf-8' });
//     res.statusCode = 200;
//     res.end(JSON.stringify(files));
//   } catch (err) {
//     res.statusCode = 500;
//     return res.end('Read file error');
//   }
// });

// * Вивести в консоль вміст js-файлів поточної папки.

// const server = http.createServer((req, res) => {
//   fs.readdir(__dirname, (err, files) => {
//     if (err) {
//       return console.error('Error reading directory:', err);
//     }

//     files.forEach(file => {
//       const filePath = path.join(__dirname, file);
//       if (path.extname(file) === '.js') {
//         fs.readFile(filePath, 'utf-8', (err, content) => {
//           if (err) {
//             return console.error('Error reading file:', file, err);
//           }
//           console.log(`Content of ${file}`);
//           console.log(content);
//         });
//       }
//     });
//   });
// });

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening http://127.0.0.1:${PORT}`);
});
