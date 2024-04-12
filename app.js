const express = require('express');
 const cors=require('cors');
const app = express();


const PORT = process.env.PORT || 3030;
 app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/services',function(req,res){
//      var services=[
//           {
//                title:"service 1 -x",
//                description:"description1"
// },
//           {
//                title:"service 2",
//                description:"description2"
     
//           },
//           {
//                title:"service 3",
//                description:"description3"
     
//           },
         
//           {
//                title:"service 4",
//                description:"description4"
     
//           },
//           {
//                title:"service 5",
//                description:"description5"
     
//           },
//           {
//                title:"service 6",
//                description:"description6"
     
//           }];
          // res.send(services);
          const xlsx=require('xlsx');
const wb=xlsx.readFile('data.xlsx');
let ws=wb.Sheets['Sheet1'];
          var data=xlsx.utils.sheet_to_json(ws);
          res.send(data);
})

app.listen(PORT);