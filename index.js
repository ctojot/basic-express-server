'use strict';

const app = require('./lib/server.js');
const PORT = process.env.PORT || 3001;

// Entry point
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});