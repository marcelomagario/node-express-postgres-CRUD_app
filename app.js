const express = require('express');
const app = express();

const port = 3000;

app.use((request, response, next)=>{
    console.log('ran in between server call-updated')
})

app.get('/', (request, response)=>{
    response.send('HELLO');        
});
app.listen(port, ()=>{
    console.log(`server started on ${port}`);
});
