/*const api_url=
 // "http://ec2-34-216-253-227.us-west-2.compute.amazonaws.com:8080/serena";  
"http://localhost:8080/cscore/list";
//define async function
async function getapi(url){
    //store response
    const response = await fetch(url);

    //store data in JSON
    var data = await response.json();
    console.log(data);
    //if(response){
    //    hideloader();
    //}
    show(data);
}

getapi(api_url);

function hideloader() { 
    document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
 document.getElementById("employee").innerHTML=data;
    /*   let tab =  
        `<tr> 
          <th>Course Number</th> 
          <th>Course Name</th> 
          <th>Units</th> 
          <th>completion status</th> 
         </tr>`; 
    
    // Loop to access all rows  
    for (let r of data.list) { 
        tab += `<tr>  
    <td>${r.course_number} </td> 
    <td>${r.course_name} </td>
    <td>${r.units}</td> 
    <td>${r.completion_status}</td>          
</tr>`; 
    } 
    // Setting innerHTML as tab variable 
    //document.getElementById("employees").innerHTML = tab; 
}
*/
async function load() {
    let url = 'http://localhost:8080/cscore/list';
    let obj = null;
    
    try {
        obj = await fetch(url);
    } catch(e) {
        console.log('error');
    }
    
    console.log(obj);
}

load();

