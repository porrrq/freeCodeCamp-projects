# Survey Form

## Objective
Build an app that is functionally similar to [FreeCodeCamp Survey Form](https://survey-form.freecodecamp.rocks). **Do not copy this demo project.**

---

## User Stories

1. **Page Title**
    - You should have a page title in an `h1` element with an `id` of `title`.

2. **Description**
    - You should have a short explanation in a `p` element with an `id` of `description`.

3. **Form**
    - You should have a `form` element with an `id` of `survey-form`.

4. **Name Input**
    - Inside the form element, you are required to enter your name in an input field that has an `id` of `name` and a `type` of `text`.

5. **Email Input**
    - Inside the form element, you are required to enter your email in an input field that has an `id` of `email`.
    - If you enter an email that is not formatted correctly, you will see an HTML5 validation error.

6. **Number Input**
    - Inside the form, you can enter a number in an input field that has an `id` of `number`.
    - The number input should not accept non-numbers, either by preventing you from typing them or by showing an HTML5 validation error (depending on your browser).
    - If you enter numbers outside the range of the number input, which are defined by the `min` and `max` attributes, you will see an HTML5 validation error.

7. **Labels**
    - For the name, email, and number input fields, you can see corresponding `label` elements in the form, that describe the purpose of each field with the following ids: `id="name-label"`, `id="email-label"`, and `id="number-label"`.

8. **Placeholders**
    - For the name, email, and number input fields, you can see placeholder text that gives a description or instructions for each field.

9. **Dropdown**
    - Inside the form element, you should have a `select` dropdown element with an `id` of `dropdown` and at least two options to choose from.

10. **Radio Buttons**
    - Inside the form element, you can select an option from a group of at least two radio buttons that are grouped using the `name` attribute.

11. **Checkboxes**
    - Inside the form element, you can select several fields from a series of checkboxes, each of which must have a `value` attribute.

12. **Textarea**
    - Inside the form element, you are presented with a `textarea` for additional comments.

13. **Submit Button**
    - Inside the form element, you are presented with a button with an `id` of `submit` to submit all the inputs.

---

## Requirements

- Fulfill the user stories and pass all the tests below to complete this project.
- Give it your own personal style. Happy Coding!

---

## Notes

- Be sure to add the following line in your HTML to link your stylesheet and apply your CSS:
  ```html
  <link rel="stylesheet" href="styles.css">
