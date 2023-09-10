const expres = require ('express');
const mongoose = require('mongoose');

const app = expres();
const port = 8000;


mongoose.connect("mongodb+srv://username:<password>@cluster0.ziew2u4.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Failed to connect to the database', error);
  });


app.listen(port,()=>{
    console.log(`Server is runing on port ${port}`);
})

// it will catch an error because invalid connection string provide you own connection sting