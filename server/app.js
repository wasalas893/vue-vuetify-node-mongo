
// import
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();
const port=5000

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));

//routers
app.use("/api/post",require("./routes/routes"));


// database connection
const mongoURL="mongodb+srv://sunanda:zaq1@WSX@cluster0.jso075r.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    
}).then(()=>console.log("connected to the database !!"))
.catch((err)=>console.log(err));


//routers


// start server
app.listen(port, ()=>console.log(`server running at http://localhost:${port}`));