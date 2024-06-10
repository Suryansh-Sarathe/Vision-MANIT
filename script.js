// Loader

let loader= document.querySelector(".loader");
window.addEventListener("load",function(){
    loader.classList.add("hide");
});

//navbar

let branchesButton= document.querySelector("#branches");
let branch_list=document.querySelector(".branch-list");

branchesButton.addEventListener("click",()=>{
        branch_list.classList.toggle("hide");
});

//Menu on mobile screens
let menu=document.querySelector("#menuIcon");
let menu_list=document.querySelector(".menu-list");

menu.addEventListener("click",()=>{ 
       menu_list.classList.toggle('hide');  
});

let menuBranches=document.querySelector("#menu-branches");
let menu_branch_list=document.querySelector(".menu-branch-list");

menuBranches.addEventListener("click",()=>{
    menu_branch_list.classList.toggle("hide");
});