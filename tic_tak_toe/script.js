let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset");
let newGameBtnv=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame =() =>{
    turn0=true;
    enable_boxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>
    {
        console.log("Box clicked");
        if(turn0){
            box.innerText="O";

            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;            
        }
        box.disabled=true;

        checkwinner();
    }
    )
});

const disabled_boxes = ()=>{
    for (let box of boxes){
        box.disabled=true;
    } 
}

const enable_boxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
}

const show_Winer=(Winner)=>{

    msg.innerText=`Congratulation Winner is ${Winner}`
    msgContainer.classList.remove("hide");
    disabled_boxes();
}


const checkwinner = () =>{
    for(pattern of winPatterns){
        let post1val=boxes[pattern[0]].innerText;
        let post2val=boxes[pattern[1]].innerText;
        let post3val=boxes[pattern[2]].innerText;

        if(post1val!="" && post2val!="" && post3val!=""){
            if(post1val==post2val && post2val==post3val){
                console.log("You are Winner",post1val);

                show_Winer(post1val);
                
            }
            
        }
    }

}

newGameBtnv.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
