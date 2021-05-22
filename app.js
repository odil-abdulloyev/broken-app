const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')

const PORT = 4000;

app.use(require('body-parser').json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);

db.sync().then(() => {
    app.listen(PORT,function() {
        console.log(`App is listening on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err.message);
});
