/*--------------------------Function--------------------------*/
/*collect the input_field.value to user_text and clear the inputbox*/
function collect (input_field) {    
    return input_field.value
  }

/*Replace the element.value with empty string*/
function empty (element) {
      element.value = ""
  }
  

/*ใช้สำหรับทำความสะอาด string ลบช่องว่าง , symbols ต่างๆออก*/
function clean_the_text (txt) {
        let low_txt = txt.toLowerCase()
        let txt_array = low_txt.match(/[a-zA-Z0-9]+/g);
        if (txt_array) {
          return txt_array.join("");
        }
         else {return ""}
  }
  
/*ใช้สำหรับเช็คว่า txt เป็น palindrome ไหม -> return true ถ้าเป็น , return false ถ้าไม่เป็น*/
function palindrome_checker (txt) {
      /* Initialize a loop*/
      let loop = true;
      let i = 0
      while (loop) {
          let left_index = i;
          let right_index = txt.length - (i+1);
  
          /*check if the index is crossing or equal(ในกรณีที่ txt.length = 1)*/
          if (left_index >= right_index) {
              return true;
          }
          /*ถ้าอักษรที่ left_index , right_index ไม่เหมือนกันให้ return fales ถ้าเหมือนก็ทำต่อไป*/
          if (txt[left_index] !== txt[right_index]) {
              return false;
          }
  
          /* updating the index*/
          i++
      }
  }
/*---------------------End of Function---------------------*/

/*Declaring some variables*/
const check_button = document.getElementById("check-btn")
const text_input_HTML = document.getElementById("text-input")
const result_text_HTML = document.querySelector("#result")
let user_text_JS

/*assign a collect function to get_user_input */
const show_result = () => {
    /*Clear all previous concole log */
    console.clear()

    /*Check empty input*/
    if (!text_input_HTML.value) {
        /*Notify*/
        alert("Please input a value");
        /*Hid previous result*/
        result_text_HTML.classList.add("hide")
        /*Exit entire function*/
        return
    }

    /*Collect the user input*/
    const user_text_JS = collect(text_input_HTML)
    console.log(`Collection = Success!\nInput from HTML = ${text_input_HTML.value}\nuser_text_JS = ${user_text_JS}
        `)
        
    /*Cleanup the user_text_JS*/
    const processed_string = clean_the_text(user_text_JS)
    console.log(`Cleanup string = Success!\nAfter cleanup string = ${processed_string}`)
    
    /*Palindrome checking*/
    let is_palindrome = palindrome_checker(processed_string)
    console.log(`Palindrome = ${is_palindrome}`);
    
    
    /*Unhide the result*/
    result_text_HTML.classList.remove("hide")
    /*Update the result to HTML*/
    if (is_palindrome) {
        /*Is palindrome = TRUE*/
        result_text_HTML.textContent = `${text_input_HTML.value} is a palindrome.`
        result_text_HTML.classList.replace("no","yes")
    }
    else {
        /*Is palindrome = FALSE*/
        result_text_HTML.textContent = `${text_input_HTML.value} is not a palindrome.`
        result_text_HTML.classList.replace("yes","no")
    }

    /*Clear the input box*/
    empty(text_input_HTML)
    console.log(`Empty the input box = Success!\nEnd of the process`)
    
}

/*run get_user_input() when the check-btn was clicked*/
check_button.addEventListener('click', show_result)
