
let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const UlId = document.getElementById("ulId");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")
const leadsFromLocalStrorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStrorage){
    myLeads = leadsFromLocalStrorage;
    render(myLeads);
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active : true , currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" ,JSON.stringify(myLeads))
        render(myLeads)
    })
        
})

function render(leads){
    let listItems = "";
for(let i=0;i<leads.length;i++){
  listItems +=  `
    <li>
        <a target ='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>`
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // UlId.append(li);
    
}
UlId.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear()
   myLeads = []
   render(myLeads)
}
)


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
    
    console.log(localStorage.getItem("myLeads"))
    }
)











  
  
 