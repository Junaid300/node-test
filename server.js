const express = require('express');
const app = express();
const {url} = require('./constants/config');
app.use(express.json());
app.set('views', './view');
app.set('view engine', 'ejs');
// app.use(url, require('./routes/api/titleRegular'));
app.use(url, require('./routes/api/titleAsync'));
// app.use('/i/want/title', require('./routes/api/getTitle-promise'));
app.use((req,res)=>
{
    res.status(404).sendFile('./view/notFound.html' , {root:__dirname});
}
)
app.listen(4001, () => console.log('Starting'));
