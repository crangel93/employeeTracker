const express = require('express');
const mysql = require('mysql2');
// call once somewhere in the beginning of the app
const cTable = require('console.table');
//const prompt=require('prompt.js');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Element1!',
      database: 'employee'
    },
    console.log('Connected to the employee database.')
  );


  db.query(`SELECT * FROM employeeInfo`, (err, rows) => {
    console.table(rows);
   //whatWouldYouLike();
  });



  // Create a candidate
  const sql = `INSERT INTO employeeInfo ( firstName, lastName, jobTitle,department,salary,manager) 
                VALUES (?,?,?,?,?,?)`;
  const params = ['john', 'ramirez', 'Attorney', 'law','125000','julie ashland'];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    }
    
  });















  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });