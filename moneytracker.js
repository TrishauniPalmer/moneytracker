// Accessing DOM elements
const addAccountButton = document.getElementById('addBut');
const accountSelect = document.getElementById('accountselect');
const savingsButton = document.getElementById('saveAccount');
const investButton = document.getElementById('invesAccount');

// Manage add account button click 
addAccountButton.addEventListener('click', function() {
    document.body.innerHTML = '<h3>Please add an account</h3>';
    
    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Enter account name';

    const valueInput = document.createElement('input');
    valueInput.placeholder = 'Enter the amount';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    submitButton.addEventListener('click', function() {
        const name  = nameInput.value;
        const value = valueInput.value;
        if (name && value) {
            alert(`Account Name: ${name}/nAccount Value: ${value}`);
      } else {
            alert('Please provide both account name and value');
    }
    });
    document.body.appendChild(nameInput);
    document.body.appendChild(valueInput);
    document.body.appendChild(submitButton);

});

submitButton.addEventListener('click', function() {
   
})

// Event listener for dropdown change
accountSelect.addEventListener('change', function () {
    const selectedAccount = accountSelect.value;
   
    // Update table data and summary based on the selected account
    updateTableData(selectedAccount);
    updateSummary(selectedAccount);
});

// Manage Savings button click event
savingsButton.addEventListener('click', function () {
    document.body.innerHTML = '<h3>Update Savings Account</h3>';
        
});

// Manage Investment button click event
investButton.addEventListener('click', function () {
    document.body.innerHTML = '<h3>Update Investment Account</h3>';
        
});

// Fetch data for the selected account
function fetchDataForAccount(selectedAccount) {
    // Implement this function to fetch data from your backend or provide predefined data
    // Return an array of objects representing account details
}

// Update the table data based on the selected account
function updateTableData(selectedAccount) {
    // Implement this function to update the table data
    // Fetch data using fetchDataForAccount(), create table rows, and append them to the <tbody>
}

// Update the summary section based on the selected account
function updateSummary(selectedAccount) {
    // Implement this function to update the summary section
}


