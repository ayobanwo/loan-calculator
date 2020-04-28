// Dom Vars
const 
	calcBtn = document.getElementById('calculate')
	amount = document.getElementById('amount'),
	interest = document.getElementById('interest'),
	years = document.getElementById('years'),
	monthlyPayment = document.getElementById('monthly-payment'),
	totalPayment = document.getElementById('total-payment'),
	totalInterest = document.getElementById('total-interest')
;

//Event Listener
calcBtn.addEventListener('click', calculateResult);

//Calculate Function
function calculateResult(e){
	// input vars
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;	
	//Compute monthly payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal*x*calculatedInterest)/(x-1);

	if(isFinite(monthly)){
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal ).toFixed(2);
	}
	else{
		showError('Please check numbers');
	}
		e.preventDefault(); 
}
function showError(error){
	//Create the error div
	const errorDiv = document.createElement('div');
	// add class
	errorDiv.className = 'alert alert-danger' ;
	//Create Text Node 
	const errorMsg = document.createTextNode(error); 
	//append text to Error div
	errorDiv.appendChild(errorMsg);

	//Displaying the errro Message
		//Get Ellements
		const card = document.querySelector('.card');
		const heading = document.querySelector('.heading');
	//inserting error before heading
	card.insertBefore(errorDiv, heading) ;
	//Set error timeout
	setTimeout(ErrorTimeOut, 3000);
}

function ErrorTimeOut(){
	document.querySelector('.alert').remove() ;
}