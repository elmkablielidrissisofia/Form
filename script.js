const Input=document.getElementsByTagName("input")
const Send=document.getElementById("send");
/*Send.addEventListener('click',SubmitFunction);*/
function validate(field,regex){
    if (!regex.test(field.value)){
        alert('please give a valid ${field.placeholder}')
    }

}
let regEmail=/^[a-zA-Z0-9]+@[a-z]{2,}\.[a-z]{2,4}$/;
let regPass=/^[a-z0-9]{7,}[A-Z]{1,}$/

function SubmitFunction(event){

    for(let i=0;i<Input.length;i++){
        if (Input[i].value==""){
           alert('Your ${Input[i].placeholder} is required');
        }
        else if (Input[i].name=="email"){
            validate(Input[i],regEmail);
        }
        else if (Input[i].name=="password"){
            validate(Input[i],regPass);
        }
        else alert('your Form has been successfully submitted')
    }
}
