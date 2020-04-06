const form = document.querySelector("form")
const liCollection = document.querySelector(".collection")
const taskItems = []

const getTaskfromUser = (evt) =>{
    let task =  evt.target.elements["add-task"].value
    if(task.trim()){
        task = task.toLowerCase()
        let taskObj = {
            task,
            isCompleted : false
        }
        taskItems.push(taskObj)
        form.reset()
        printTaskList()

    }
    else{
        $(document).ready(function(){
            $('#modal').modal();
            $('#modal').modal('open'); 
         });
    }


}


const printTaskList = ()=>{
const label = document.createElement("label")
const checkBox = document.createElement("input")
checkBox.setAttribute("type","checkbox") 
const span = document.createElement("span")
label.append(checkBox,span)
const a = document.createElement("a")
a.setAttribute("href","#")
const icon = document.createElement("i")
icon.textContent = "delete"
icon.classList.add("material-icons")
a.classList.add("icon-class")
a.append(icon)  
const li = document.createElement("li")
li.classList.add("collection-item","collection-li")    
taskItems.forEach((task,index)=>{
     li.textContent = task.task
     li.appendChild(label)
     li.setAttribute("data-id",index)
     li.append(a)
     liCollection.append(li)
})
    
}







const loadAllEventListners = ()=>{

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()   
    getTaskfromUser(evt)
})

}



loadAllEventListners()