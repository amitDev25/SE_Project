const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.render('index')
})

app.get("/admission", (req, res)=>{
    res.render('admission')
})

app.post("/create", async (req, res)=>{
    let createdUser = await userModel.create({
        studentName: req.body.studentName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        gender: req.body.gender,
        mobile: req.body.mobile,
        emailId: req.body.emailId,
        address1: req.body.address1,
        address2: req.body.address2,
        state: req.body.state,
        school10: req.body.school10,
        percent10: req.body.percent10,
        board10: req.body.board10,
        school12: req.body.school12,
        percent12: req.body.percent12,
        board12: req.body.board12,
        lastExam: req.body.lastExam,
        lastExamPercent: req.body.lastExamPercent,
        course: req.body.course       

        
    });
    res.redirect('/') 
})

app.get("/students", async (req, res)=>{
    let allStudents = await userModel.find();
    res.render('students', {allStudents})
    
})

app.get("/view/:id", async (req, res)=>{    
    let student = await userModel.findOne({_id: req.params.id});

    res.render('studentDetails', {student})
    
})

app.post("/update/:userid", async(req, res)=>{
    

    let updatedUser = await userModel.findOneAndUpdate({_id: req.params.userid},{
        studentName: req.body.studentName,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        gender: req.body.gender,
        mobile: req.body.mobile,
        emailId: req.body.emailId,
        address1: req.body.address1,
        address2: req.body.address2,
        state: req.body.state,
        school10: req.body.school10,
        percent10: req.body.percent10,
        board10: req.body.board10,
        school12: req.body.school12,
        percent12: req.body.percent12,
        board12: req.body.board12,
        lastExam: req.body.lastExam,
        lastExamPercent: req.body.lastExamPercent,
        course: req.body.course     
    }, {new: true});
    res.redirect('/students')    
})

app.get("/delete/:id", async(req, res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect('/students')
})

app.get("/edit/:id", async(req, res)=>{
    let student = await userModel.findOne({_id: req.params.id});
    res.render('edit', {student})
})




app.listen(3000, function(){
    console.log('App is running....')
})  