/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

$(document).ready(function() {
const addtolist= document.querySelector("form");
const tbodyt =document.querySelector("tbody");
const tablet =document.querySelector("table");



// on click of adduser
const onaddUser = (e)=>{
e.preventDefault();
const sn= document.getElementById("sn").value;
const name= document.getElementById("name").value;
const email= document.getElementById("email").value;
const DOB= document.getElementById("DOB").value;
tbodyt.innerHTML+=`
<tr >
<td className="data">${sn}</td>
<td className="data">${name}</td>
<td className="data">${email}</td>
<td className="data">${DOB}</td>
<td><button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit</button></td>
<td><button class="deleteBtn">Delete</button></td>
</tr>

`
}

//on click of delete button
const onDelete = (e)=>{
    const btn =e.target;
    btn.closest("tr").remove();
}


addtolist.addEventListener("submit", onaddUser);
tablet.addEventListener("click", onDelete);
});


// on change search bar

    const searchMatch= ()=> {

        let filter= document.getElementById("myinput").value.toUpperCase();
        let  search = document.getElementById("names");
        let tr = search.getElementsByTagName("tr");
        
        for(var i=0; i<tr.length; i++){
             
            let td = tr[i].getElementsByTagName("td")[0];
            
           if(td){ 
              let textvaule= td.textContent ||  td.innerHTML;
           if(textvaule.toUpperCase().indexOf(filter) >-1)
            {
                 tr[i].style.display="";
            }
            else
            {
                 tr[i].style.display="none";
            }
        
           }
        
        } 
        }