// //create new user detils
function register(){
    userid=reg_id.value
    username=reg_name.value
    pswd=reg_pswd.value

    //create user object
    userDetials={
        userid,
        username,
        pswd
    }

    //check if already userid exist
    if(userid in localStorage){
        alert('User id already exist')
    }else{
        localStorage.setItem(userid,JSON.stringify(userDetials))
        alert('Registeration successfull')
        window.location='./index.html'
    }
}

// redirect to registeration page page
function registerion(){
    window.location='./register.html'
}

//login
function logIn(){
   userid=userinput.value;
   pswd=userpswd.value;
   if(userid in localStorage){
    userDetial=JSON.parse(localStorage.getItem(userid))
    if(pswd==userDetial.pswd){
        alert('Login successfull')
        window.location='./home.html'
        names=userDetial.username
        localStorage.setItem('uname',names)

    }else{
        alert('Incorrect password')
    }
        
            
    
   }else{
    alert('Userid not Present')
   }
}

//logout 
function logout(){
    window.location='./index.html'
}



// income


var totalbudget = 0;
var currentbalance = 0;

function income() {
    amountvalue = income_amount.value;
    incomename=income_name.value;

    if (amountvalue == "" || isNaN(amountvalue)) {

        alert("Please enter a valid number");

    }
    else {
        localStorage.setItem("AMOUNT", amountvalue);
        alert("Income add successfully");
        data = Number(localStorage.getItem("AMOUNT"));
        console.log(data);
        totalbudget += data;
         currentbalance += data;

        totalBudget.innerHTML = `Total Budget: ${totalbudget}`;
        currentBalance.innerHTML = `Current Balance: ${currentbalance}`;
         incomes.innerHTML=`Income`
        incomelist=`<ul class="list-group list-group-flush text-dark mb-4 ">
        <li class="list-group-item  bg-success text-light rounded-bottom ps-3">Income Name : ${incomename} &nbsp;&nbsp; income amount :  ${amountvalue}</li>
       
      </ul>`;
      inputincome.innerHTML+=incomelist;
    }
}

// // expense

function addExpense() {



    var user = {
        Item:expense_name.value,
        Expense:expense_amount.value,
        Balance: currentbalance
    }

     localStorage.setItem(user.Item, JSON.stringify(user));

   convert = JSON.parse(localStorage.getItem(user.Item));
console.log(convert.Expense);



    if (expense_name.length == "") {

        alert("Please enter an expense name");
    }

    else if (expense_amount.value == "" || isNaN(expense_amount.value)) {

        alert('Please enter a valid expense amount');
    }

    else if (expense_amount.value <= currentbalance) {



        currentbalance = parseFloat(Number(currentbalance) - Number(expense_amount.value));
        currentBalance.innerHTML = `Current Balance:${currentbalance}`;
        alert('expense added successfully')
         expn.innerHTML=`Expense`

        expenselist=`<ul class="list-group list-group-flush text-dark mb-4 ">
        <li class="list-group-item  bg-danger text-light rounded-bottom ps-3">Expense Name : ${convert.Item} &nbsp;&nbsp; Expense amount : ${convert.Expense}</li>
        
        
      </ul>`;

        expout.innerHTML +=expenselist;


    }

    else {
        alert("sorry your expense amount is higher than your current balance");
    }

}



