const  express= require('express');
const app= express();
app.get('/', function(req, res) {
    res.send('Hello world');
});

const port =process.env.PORT||3000;
console.log(`Server is listening on port ${port}`);
app.listen(port);