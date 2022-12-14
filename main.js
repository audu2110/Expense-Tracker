const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#Description');
const categoryInput=document.querySelector('category');
const expenseList = document.querySelector('#expense');

myForm.addEventListener('submit', onSubmit);
var desc=descriptionInput.value;

function onSubmit(e){
    e.preventDefault();
    var amt=amountInput.value
    var desc=descriptionInput.value

    var hdgdg=document.getElementById('category')
    var tehdhdxt=hdgdg.options[hdgdg.selectedIndex].text;




    let obj={
        amt,
        desc,
        tehdhdxt
    };
    localStorage.setItem(obj.desc,JSON.stringify(obj))
    showNewUserOnScreen(obj);
}




window.addEventListener("DOMContentLoaded", () =>{
    const localStorageObj=localStorage;
    const localStorageKeys=Object.keys(localStorageObj);
    for(var i=0;i<localStorageKeys.length;i++){
      const  key=localStorageKeys[i];
      const userDetailString=localStorageObj[key];
      const userDetailsObj=JSON.parse(userDetailString);
      showNewUserOnScreen(userDetailsObj);
    }
  })
  function showNewUserOnScreen(user){
    if(localStorage.getItem(user.desc) !== null){
      removeUserFromScreen(desc);
    }
    const parentNode=document.getElementById('expense');
    const childHTML = `<li id=${user.desc}> ${user.amt} - ${user.desc}-${user.tehdhdxt}
                                          <button onclick=deleteUser('${user.desc}')> Delete Expense </button>
                                          <button onclick=editUserDetails('${user.amt}','${user.desc}','${user.tehdhdxt}')>Edit Expense </button>
                                       </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
  }
  
  function editUserDetails(amont, descrp, drop){
  
    document.getElementById('Description').value = descrp;
    document.getElementById('amount').value = amont;
    document.getElementById('category').options[document.getElementById('category').selectedIndex].text=drop;
    deleteUser(descrp);
  }
  
  function deleteUser(descrp){
    console.log(descrp)
    localStorage.removeItem(descrp);
    removeUserFromScreen(descrp);
  }
  
  function removeUserFromScreen(descrp){
    const parentNode = document.getElementById('expense');
    const childNodeToBeDeleted = document.getElementById(descrp);
    if(childNodeToBeDeleted){
      parentNode.removeChild(childNodeToBeDeleted);
    }
    
  }
