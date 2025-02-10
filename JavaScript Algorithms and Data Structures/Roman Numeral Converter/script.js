//Declare varaibles
const inputHTML = document.getElementById("number") //user's number input
const convertBtn = document.getElementById("convert-btn") //convert button
const outputContainer = document.getElementById("output-container") //output container
const output = document.getElementById("output") // <p> output
let testNum = 0;
let romanSum = 0;
let romanString = "";

//alert message
const msgObject = {
    notValid: "Please enter a valid number",
    lowerThanMin: "Please enter a number greater than or equal to 1", //min=1
    moreThanMax: "Please enter a number less than or equal to 3999" //max=3999
}
let msgKey //use to pick the msg from msgObject.

//Roman Numeral Map
const romanNumeralMap = [
    {
        symbol: "M",
        value: 1000
    },
    {
        symbol: "CM",
        value: 900
    },
    {
        symbol: "D",
        value: 500
    },
    {
        symbol: "CD",
        value: 400
    },
    {
        symbol: "C",
        value: 100
    },
    {
        symbol: "XC",
        value: 90
    },
    {
        symbol: "L",
        value: 50
    },
    {
        symbol: "XL",
        value: 40
    },
    {
        symbol: "X",
        value: 10
    },
    {
        symbol: "IX",
        value: 9
    },
    {
        symbol: "V",
        value: 5
    },
    {
        symbol: "IV",
        value: 4
    },
    {
        symbol: "I",
        value: 1
    }
]

//Function
//use for check input validation & assign value to msgKey
function checkValidInput (usrInput) {

    const checkingNumberInt = parseInt(usrInput) //convert usrInput to an int
    const checkingNumberFloat = parseFloat(usrInput) //convert usrInput to a float
    const regex = /-?[0-9]+/ //regex for capture only the numbers
    const match = parseInt(usrInput.match(regex)) //try to match the number from usrInput and convert it to int (make it comparable with checkingNumber).

    if (checkingNumberInt !== match || checkingNumberInt !== checkingNumberFloat) {
        msgKey = "notValid"
        return false
    }
    else if (checkingNumberInt < 1) {
        msgKey = "lowerThanMin"
        return false
    }
    else if (checkingNumberInt > 3999) {
        msgKey="moreThanMax"
        return false
    }
    else return true;
}

//use to convert number to a Roman Numeral
function convertToRomanNum (number) {
    //reset previous result
    romanSum = 0;
    romanString = "";
    
    //loop through to find ตัวที่มีค่าทีุ่สดที่บวกเข้าไปได้
    for (let index = 0 ; index < romanNumeralMap.length ; index++) {

        testNum = romanSum + romanNumeralMap[index].value

        //ถ้าลองบวกแล้วเกิน ก็ให้เปลี่ยน index เป็นตัวถัดไปแทน
        if(testNum > number) {continue}
        //ถ้าบวกแล้วเท่ากับค่าที่ต้องการ
        else if (testNum === number) {
            romanSum += romanNumeralMap[index].value //update the romanSum
            romanString += romanNumeralMap[index].symbol //update the romanString
            break; //exit the for loop
        }
        //ถ้าบวกแล้วไม่เกิน ก็ให้บวกไป แล้วรีเซ็ต index
        else {
            romanSum += romanNumeralMap[index].value //update the romanSum
            romanString += romanNumeralMap[index].symbol //update the romanString
            index = -1 //reset the index
        }
    }
}

//the ultimate function
function main (number) {
    //check the input validation first , if it "false" ->
    const validation = checkValidInput(number)
    //if it "false" ->
    if (!validation) {
        output.innerText = msgObject[msgKey] //Update the result to alert msg
        output.classList.add("false")//Change the result box style
        return //exit entire function
    }
    //if it "true" ->
    else {
        convertToRomanNum(number) //calculate the roman number
        //update it to HTML
        output.innerText = romanString
        output.classList.remove("false")
        return //exit entire function
    }

}
const run_main = () => {main(inputHTML.value)}

// Add event listener to the convert button
convertBtn.addEventListener("click",run_main);
