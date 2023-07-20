express = require('express');
app = express();
PORT = 8000;

app.use('/media', express.static('media'));
app.use('/public', express.static('public'));
app.use('/style', express.static('style'));

app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); })

app.listen(PORT, () => { console.log(`listening on ${PORT}`); })

