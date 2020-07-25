const form = document.querySelector("form")
const liCollection = document.querySelector(".collection")
const taskItems = []
let counter = 0

const getTaskfromUser = (evt) =>{
    let task =  evt.target.elements["add-task"].value
    if(task.trim()){
        task = task.toLowerCase()
        let taskObj = {
            task,
        }
        taskItems.push(taskObj)
        form.reset()
        printTask()
        .then(data => deleteTask(data))
        .catch(err => console.log(err))

    }
    else{
        $(document).ready(function(){
            $('#modal').modal();
            $('#modal').modal('open'); 
         });
    }


}

const printTask = ()=>{
    const anchor = document.createElement("a")
    anchor.setAttribute("href","#")
    anchor.classList.add("icon-class")
    const icon = document.createElement("i")
    icon.classList.add("material-icons")
    icon.textContent = "delete"
    anchor.append(icon)
    const li = document.createElement("li")
    li.classList.add("collection-item","collection-li")
    
    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            taskItems.forEach((task,index)=>{
                if(index === counter){
                li.textContent = task.task;
                li.setAttribute("id",index)
                li.append(anchor)
                liCollection.append(li)

            }
            else{
                console.log("task already declared!")
            }
         
          })
          counter++
           
            const lists = document.querySelectorAll("li")
        if(lists.length !== 0){
            res(lists)
        }
        else{
            rej("error occured list is not defined")
        }
        
        },1000)
        
    })

return promise
}



const deleteTask = (tList)=>{

tList = Array.from(tList)

tList.forEach((_singleLi,index) =>{
    _singleLi.addEventListener("click",(e)=>{
        e.stopPropagation()
        e.stopImmediatePropagation()
        if(e.target.tagName === "I"){   
        const id = e.target.parentElement.parentElement.id 
        e.target.parentElement.parentElement.remove()
        taskItems.splice(id,1)
        counter--
        $(document).ready(function(){
            $('#modal1').modal();
            $('#modal1').modal('open'); 
         });    
    }
        else{
            console.log("not targeted!")
        }
    },false)
})



}










const loadAllEventListners = ()=>{

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()   
    getTaskfromUser(evt)
})

}



loadAllEventListners()