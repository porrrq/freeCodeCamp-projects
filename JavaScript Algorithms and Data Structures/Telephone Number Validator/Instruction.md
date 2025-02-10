# **Telephone Number Validator**  

In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:  

```
1 555-555-5555  
1 (555) 555-5555  
1(555)555-5555  
1 555 555 5555  
5555555555  
555-555-5555  
(555)555-5555  
```

**Note:**  
- The **area code is required**.  
- If the **country code is provided, it must be `1`**.  

## **Objective**  
Build an app that is functionally similar to [this Telephone Number Validator](https://telephone-number-validator.freecodecamp.rocks).  

## **User Stories**  

- You should have an `input` element with an `id` of `"user-input"`.  
- You should have a `button` element with an `id` of `"check-btn"`.  
- You should have a `button` element with an `id` of `"clear-btn"`.  
- You should have a `div`, `span`, or `p` element with an `id` of `"results-div"`.  
- When you click on the `#check-btn` element **without entering a value**, an **alert** should appear with the text:  
  > **"Please provide a phone number"**  
- When you click on the `#clear-btn` element, the content within the `#results-div` element should be **removed**.  

### **Validation Cases**  

| **Input Number**            | **Expected Output**                                  |
|-----------------------------|-----------------------------------------------------|
| `1 555-555-5555`           | `"Valid US number: 1 555-555-5555"`                 |
| `1 (555) 555-5555`         | `"Valid US number: 1 (555) 555-5555"`               |
| `5555555555`               | `"Valid US number: 5555555555"`                     |
| `555-555-5555`             | `"Valid US number: 555-555-5555"`                   |
| `(555)555-5555`            | `"Valid US number: (555)555-5555"`                  |
| `1(555)555-5555`           | `"Valid US number: 1(555)555-5555"`                 |
| `555-5555`                 | `"Invalid US number: 555-5555"`                     |
| `5555555`                  | `"Invalid US number: 5555555"`                      |
| `1 555)555-5555`           | `"Invalid US number: 1 555)555-5555"`               |
| `1 555 555 5555`           | `"Valid US number: 1 555 555 5555"`                 |
| `1 456 789 4444`           | `"Valid US number: 1 456 789 4444"`                 |
| `123**&!!asdf#`            | `"Invalid US number: 123**&!!asdf#"`                |
| `55555555`                 | `"Invalid US number: 55555555"`                     |
| `(6054756961)`             | `"Invalid US number: (6054756961)"`                 |
| `2 (757) 622-7382`         | `"Invalid US number: 2 (757) 622-7382"`             |
| `0 (757) 622-7382`         | `"Invalid US number: 0 (757) 622-7382"`             |
| `-1 (757) 622-7382`        | `"Invalid US number: -1 (757) 622-7382"`            |
| `2 757 622-7382`           | `"Invalid US number: 2 757 622-7382"`               |
| `10 (757) 622-7382`        | `"Invalid US number: 10 (757) 622-7382"`            |
| `27576227382`              | `"Invalid US number: 27576227382"`                  |
| `(275)76227382`            | `"Invalid US number: (275)76227382"`                |
| `2(757)6227382`           | `"Invalid US number: 2(757)6227382"`                 |
| `2(757)622-7382`           | `"Invalid US number: 2(757)622-7382"`               |
| `555)-555-5555`            | `"Invalid US number: 555)-555-5555"`                |
| `(555-555-5555`            | `"Invalid US number: (555-555-5555"`                |
| `(555)5(55?)-5555`         | `"Invalid US number: (555)5(55?)-5555"`             |
| `55 55-55-555-5`           | `"Invalid US number: 55 55-55-555-5"`               |
| `11 555-555-5555`          | `"Invalid US number: 11 555-555-5555"`              |
| **Valid US number**        | `"Valid US number: " + number`                      |
| **Invalid US number**      | `"Invalid US number: " + number`                    |

## **Completion Criteria**  
Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. **Happy Coding!** 🎉  