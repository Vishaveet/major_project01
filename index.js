const express=require('express');
const port =8000;
const app=express();



app.listen(port,function(err){
    if(err){
        console.log('Error is running server');
        return;
    }
    console.log(`Server is running on port:${port}`);
})