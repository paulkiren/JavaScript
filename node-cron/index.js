var cron = require('node-cron');
var app = require('express');
 
cron.schedule('* * * * *', function(){
  console.log('running a task every minute', new Date());
});
cron.validate('* * * * * *');


app.get('/newUser', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || users.username) {
    return res.sendStatus(400);
  }

  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512);

  users[username] = { salt, hash };

  res.sendStatus(200);
});


app.get('/auth', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    return res.sendStatus(400);
  }

  const hash = crypto.pbkdf2Sync(password, users[username].salt, 10000, 512);

  if (users[username].hash.toString() === hash.toString()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});
