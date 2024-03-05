const express = require('express')
const path = require('path')
const port = 8005; // kimjaer.cafe24app.com 포트정보
// const navidata = require("./server/routers/navi");

const app = express();

// localhost:8005 , kimjaer.cafe24app.com 절대경로세팅
app.use(express.static(path.join(__dirname, './front/build')))

app.get('/',(req, res, next)=>{
     res.sendFile(path.join(__dirname, './front/build/index.html'))      
})

// app.use("/api", navidata);
app.use((req, res)=>{
   res.status(404).sendFile(path.join(__dirname, './www/nopage.html'))}
)

app.listen(port, ()=>{
    console.log(`localhost:${port} 서버정상구동`)
})