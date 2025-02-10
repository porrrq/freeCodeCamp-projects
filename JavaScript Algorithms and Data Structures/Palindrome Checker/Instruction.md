# **Palindrome Checker**  

A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.  

> **Note:** You'll need to remove all non-alphanumeric characters (punctuation, spaces, and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.  

## **Objective**  
Build an app that is functionally similar to [this Palindrome Checker](https://palindrome-checker.freecodecamp.rocks).  

## **User Stories**  

- You should have an `input` element with an `id` of `"text-input"`.  
- You should have a `button` element with an `id` of `"check-btn"`.  
- You should have a `div`, `span`, or `p` element with an `id` of `"result"`.  
- When you click on the `#check-btn` element **without entering a value** into the `#text-input` element, an alert should appear with the text:  
  > **Please input a value.**  
- When the `#text-input` element contains:  

  | **Input Text**                                  | **Expected Output**                                      |
  |-----------------------------------------------|------------------------------------------------------|
  | `A`                                         | `A is a palindrome.`                               |
  | `eye`                                       | `eye is a palindrome.`                            |
  | `_eye`                                      | `_eye is a palindrome.`                           |
  | `race car`                                  | `race car is a palindrome.`                       |
  | `not a palindrome`                          | `not a palindrome is not a palindrome.`          |
  | `A man, a plan, a canal. Panama`            | `A man, a plan, a canal. Panama is a palindrome.` |
  | `never odd or even`                         | `never odd or even is a palindrome.`             |
  | `nope`                                      | `nope is not a palindrome.`                      |
  | `almostomla`                                | `almostomla is not a palindrome.`                |
  | `My age is 0, 0 si ega ym.`                 | `My age is 0, 0 si ega ym. is a palindrome.`     |
  | `1 eye for of 1 eye.`                       | `1 eye for of 1 eye. is not a palindrome.`       |
  | `0_0 (: /-\ :) 0-0`                         | `0_0 (: /-\ :) 0-0 is a palindrome.`             |
  | `five|\_/|four`                             | `five|\_/|four is not a palindrome.`             |

## **Completion Criteria**  
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. **Happy Coding!** 🎉  