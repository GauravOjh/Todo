document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        var ct=document.querySelectorAll(''); 
            document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        console.log(document.querySelector('#newtask input').value);
        if(document.querySelector('#newtask input').value.length>0)
        {
            document.querySelector('#newtask input').value='';
        }
       var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}