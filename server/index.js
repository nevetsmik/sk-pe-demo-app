const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

// Create express app
const app = express();

/*********************************** REST API ***********************************/
// Require routers defined for visitorApi
const router = require('./visitorApi/router.js');

// Serve content on relevant route
app.use('/visitorApi', router);

/*********************************** MIDDLEWARES ***********************************/
// Enforce ssl
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] != 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

// Serve static assets with compression
app.use(
  expressStaticGzip(path.join(__dirname, '..', 'build'), {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: 'deflate',
        fileExtension: 'zz',
      },
    ],
    orderPreference: ['br', 'gz'],
    serveStatic: {
      lastModified: false,
      etag: false,
      setHeaders: (res, path) => {
        // Turn off caching completely for index.html
        if (path.indexOf('index.html') !== -1) {
          res.set('Cache-Control', 'no-store');
        }
      },
    },
  })
);

// Catch all for routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'), {});
});

// Start server
app.listen(process.env.PORT || 5050, () => {
  console.log(`Server started on port ${process.env.PORT || 5050}`);
});
