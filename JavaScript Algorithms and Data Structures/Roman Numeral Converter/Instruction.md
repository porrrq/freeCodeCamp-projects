# **Roman Numeral Converter**  

Roman numerals are based on seven symbols and can be written using various combinations to represent Arabic numerals.  

### **Roman Numerals and Their Values**  

| **Roman Numerals** | **Arabic Numerals** |
|--------------------|--------------------|
| M                | 1000               |
| CM               | 900                |
| D                | 500                |
| CD               | 400                |
| C                | 100                |
| XC               | 90                 |
| L                | 50                 |
| XL               | 40                 |
| X                | 10                 |
| IX               | 9                  |
| V                | 5                  |
| IV               | 4                  |
| I                | 1                  |

## **Objective**  
Build an app that is functionally similar to [this Roman Numeral Converter](https://roman-numeral-converter.freecodecamp.rocks).  

## **User Stories**  

- You should have an `input` element with an `id` of `"number"`.  
- You should have a `button` element with an `id` of `"convert-btn"`.  
- You should have a `div`, `span`, or `p` element with an `id` of `"output"`.  
- When you click on the `#convert-btn` element **without entering a value** into the `#number` element, the `#output` element should contain the text:  
  > **"Please enter a valid number"**  
- When the `#number` element contains:  

  | **Input Number** | **Expected Output**                          |
  |-----------------|-------------------------------------------|
  | `-1`           | `"Please enter a number greater than or equal to 1"` |
  | `4000` or more | `"Please enter a number less than or equal to 3999"` |
  | `9`            | `"IX"`                                      |
  | `16`           | `"XVI"`                                     |
  | `649`          | `"DCXLIX"`                                  |
  | `1023`         | `"MXXIII"`                                  |
  | `3999`         | `"MMMCMXCIX"`                               |

## **Completion Criteria**  
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. **Happy Coding!** 🎉  