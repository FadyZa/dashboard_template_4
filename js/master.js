// check which page it is
let title = document.title;


// animate icons on hover [Side Bar] && add active class to current page
let SideBarList = document.querySelectorAll("aside li");
SideBarList.forEach((ele)=>{
    let icon = ele.querySelector("i");
    ele.addEventListener("mouseover",(e)=>{
        icon.classList.add("fa-bounce");
    })
    ele.addEventListener("mouseout",(e)=>{
        icon.classList.remove("fa-bounce");
    })
    
    let sideBarText = ele.querySelector("span").innerText;
    if(sideBarText.toLocaleLowerCase() == title.toLocaleLowerCase()){
        ele.classList.add("active");
    }
    else{
        ele.classList.remove("active")
    }
})

// functions for index.html
if(title == 'dashboard'){

// progress bars [Yearly Target Section]
let progressBar = document.querySelectorAll(".bar");
let targetBox = document.querySelector(".target-box");

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop >= (targetBox.offsetTop - targetBox.clientHeight)){
        progressBar.forEach((ele)=>{
            let progress = ele.children[0].dataset.progress;
            ele.children[0].innerHTML = `${progress}%`;
            ele.children[0].style.left = `calc(${progress}% - 18px)`;
            ele.children[1].style.width = `${progress}%`;
        })
    }
});

// line through done tasks [Latest Tasks section]
let tasksRow = document.querySelectorAll(".tasks-row");

tasksRow.forEach((ele,i)=>{
    ele.addEventListener("click",(e)=>{
        if(e.target.classList.contains('fa-trash-can')){
            ele.classList.toggle("done");
            let storedTasks = localStorage.getItem("tasksDone");
            let myArray = storedTasks ? JSON.parse(storedTasks) : [];
            let newObj = {i:i,contain:ele.classList.contains('done')};
            let isObjExist = myArray.find(
                (obj) => obj.i == newObj.i
            );

            if(!isObjExist){
                myArray.push(newObj);
                localStorage.setItem(`tasksDone`,JSON.stringify(myArray));
            }else{
                myArray[newObj.i] = newObj;
                localStorage.setItem(`tasksDone`,JSON.stringify(myArray));
            }
        }
    })
})

let storedTasks = JSON.parse(localStorage.getItem('tasksDone'));
if(storedTasks){
    storedTasks.forEach((task)=>{
        if(task.contain){
            tasksRow[task.i].classList.add("done")
        }
    })
}

// animate icons on hover [Social media]
let socialMediaRow = document.querySelectorAll(".social-row");
socialMediaRow.forEach((ele)=>{
    let icon = ele.querySelector("i");
    ele.addEventListener("mouseover",()=>{
        icon.classList.add("fa-beat-fade");
    })

    ele.addEventListener("mouseout",()=>{
        icon.classList.remove("fa-beat-fade");
    })
})
}


// functions for settings.html
else if (title.toLowerCase() == 'settings'){
    console.log('setting')
}


// functions for profile.html
else if (title.toLowerCase() == 'profile'){
    console.log('profile')
}

