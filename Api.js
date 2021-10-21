const express = require('express');
const router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require('C:/temp/fir-c63c3-firebase-adminsdk-ouc98-791d66d36c.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-c63c3-default-rtdb.firebaseio.com/"
});


router.post('/delete', function(req, res){
    const Id = req.body.Id; 
    
    res.send({        
        type: 'POST',
        Id: req.body.Id,       
    });

    admin.database().ref('student/'+Id).remove();
});

router.post('/update', function(req, res){
    const Id = req.body.Id; 
    const student_id = req.body.student_id;
    const First_N = req.body.First_N;
    const Last_N = req.body.Last_N;
    const section = req.body.section; 
    
    res.send({        
        type: 'POST',
        id: req.body.Id,       
        student_id: req.body.student_id,        
        Last_N: req.body.Last_N,
        First_N: req.body.First_N,
        section: req.body.section,
    });

    admin.database().ref('student/'+Id).update({
        Stud_id: student_id,        
        L_name: Last_N,
        F_name: First_N,
        Section: section,
    });
});

router.post('/update', function(req, res){
    const Id = req.body.Id; 
    const student_id = req.body.student_id;
    const First_N = req.body.First_N;
    const Last_N = req.body.Last_N;
    const section = req.body.section; 
    
    res.send({        
        type: 'POST',
        id: req.body.Id,       
        student_id: req.body.student_id,        
        Last_N: req.body.Last_N,
        First_N: req.body.First_N,
        section: req.body.section,
    });

    admin.database().ref('student/'+Id).update({
        Stud_id: student_id,        
        L_name: Last_N,
        F_name: First_N,
        Section: section,
    });
});

router.post('/create', function(req, res){
    const Id = req.body.Id; 
    const student_id = req.body.student_id;
    const First_N = req.body.First_N;
    const Last_N = req.body.Last_N;
    const section = req.body.section; 
    
    res.send({        
        type: 'POST',
        Id: req.body.Id,       
        student_id: req.body.student_id,        
        Last_N: req.body.Last_N,
        First_N: req.body.First_N,
        section: req.body.section,
    });

    admin.database().ref('student/'+Id).set({
        Stud_id: student_id,        
        L_name: Last_N,
        F_name: First_N,
        Section: section,
    });
});


module.exports = router;

