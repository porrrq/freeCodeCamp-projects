    //------[Variables]------
    const inputField = document.getElementById('user-input');
    const checkButton = document.getElementById('check-btn');
    const clearButton = document.getElementById('clear-btn');
    const resultField = document.getElementById('results-div');
    let resultText = "";
    let validity;

    //------[Functions]------
    const blankDetection = string => !string; //return true if string is existing

    const usTelCheck = telNum => {

    //declare a regex for capture an US Tel number
    const usTelRegex = /^1?\s?(?:\d{3}|\(\d{3}\))\s?-?\d{3}\s?-?\d{4}/gi;
    //store the matching result in match variable
    const match = telNum.match(usTelRegex)
    //return true/fase based on the condition
    if (match !== null && match.length === 1 && match[0] === telNum) {return true}
    else {return false}
    }

    //return the result-text -> use result from usTelCheck
    const createResultText = valid => {
    validity = valid? "Valid":"Invalid";
    return `${validity} US number: ${inputField.value}`;
    }

    //use for appending <p class='result'></p> to the resultField and clear the inputField.
    const resultUpdate = (content,valid) => {
    //create a new html element
    const newResultElement = document.createElement("p"); //result element
    const newSeperater = document.createElement("div"); //seperater element
    //add a class
    newResultElement.classList = 'result';
    newSeperater.classList = "seperater"
    //add icon,color to content 
    if (valid) {
        newResultElement.classList.add("green-text")
        newResultElement.innerHTML = `<i class='bx bxs-check-square' ></i> ${content}`;
    }
    else {
        newResultElement.classList.remove("green-text")
        newResultElement.innerHTML = `<i class='bx bxs-x-square'></i> ${content}`;

    }
    //add a textContent
    //append
    resultField.append(newResultElement);
    resultField.append(newSeperater);
    //clear the inputField
    inputField.value = "";
    
    
    }

    //A function that assign to check-btn
    const check = () => {
    //bypass the function if inputField is blank
    if (blankDetection(inputField.value))  {
        alert("Please provide a phone number")
        return
    }
    //Tel validation  and show the result process
    const testResult = usTelCheck(inputField.value)
    resultUpdate(createResultText(testResult),testResult)
    } 

    //A function that assign to clear-btn
    const clear = () => {
     resultField.innerHTML = "";
    // clear the input flied
    inputField.value = "";
    }

    //------[addEventListener to buttons]------
    checkButton.addEventListener('click',check)
    clearButton.addEventListener('click',clear)
    //add click function to inputField
    inputField.addEventListener('keydown' , (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            check()}
    })