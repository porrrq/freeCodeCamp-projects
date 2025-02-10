# **Pokémon Search App**

## **Objective**
Build a Pokémon Search App that allows users to search for Pokémon by name or ID and display the results. The app will retrieve Pokémon data and images using freeCodeCamp's PokéAPI Proxy.

The app should be functionally similar to:  
👉 [Pokémon Search Demo](https://pokemon-search-app.freecodecamp.rocks)

---

## **User Stories**

### **HTML Structure**
1. You should have an **input element** with an `id` of **"search-input"**.
2. You should have a **button element** with an `id` of **"search-button"**.
3. You should have an **element with an `id` of "pokemon-name"`**.
4. You should have an **element with an `id` of "pokemon-id"`**.
5. You should have an **element with an `id` of "weight"`**.
6. You should have an **element with an `id` of "height"`**.
7. You should have an **element with an `id` of "types"`**.
8. You should have an **element with an `id` of "hp"`**.
9. You should have an **element with an `id` of "attack"`**.
10. You should have an **element with an `id` of "defense"`**.
11. You should have an **element with an `id` of "special-attack"`**.
12. You should have an **element with an `id` of "special-defense"`**.
13. You should have an **element with an `id` of "speed"`**.

---

## **Functionality & Behavior**
- **Error Handling:**  
  - When `#search-input` contains **Red** and `#search-button` is clicked, an **alert** should appear with the message:  
    `"Pokémon not found"`.

- **Searching for Pikachu:**  
  - When `#search-input` contains **Pikachu** and `#search-button` is clicked:
    - The following elements should update:
      | Element ID            | Value |
      |-----------------------|-------|
      | `#pokemon-name`       | **PIKACHU** |
      | `#pokemon-id`         | **#25** or **25** |
      | `#weight`             | **Weight: 60** or **60** |
      | `#height`             | **Height: 4** or **4** |
      | `#hp`                 | **35** |
      | `#attack`             | **55** |
      | `#defense`            | **40** |
      | `#special-attack`     | **50** |
      | `#special-defense`    | **50** |
      | `#speed`              | **90** |

    - An `img` element with the `id` **"sprite"** should be added to the page, with its `src` set to Pikachu's `front_default` sprite.
    - The `#types` element should contain a **single inner element** with the value **ELECTRIC**.
    - The `#types` content should be **cleared between searches**.

- **Searching for Gengar (ID: 94):**  
  - When `#search-input` contains **94** and `#search-button` is clicked:
    - The following elements should update:
      | Element ID            | Value |
      |-----------------------|-------|
      | `#pokemon-name`       | **GENGAR** |
      | `#pokemon-id`         | **#94** or **94** |
      | `#weight`             | **Weight: 405** or **405** |
      | `#height`             | **Height: 15** or **15** |
      | `#hp`                 | **60** |
      | `#attack`             | **65** |
      | `#defense`            | **60** |
      | `#special-attack`     | **130** |
      | `#special-defense`    | **75** |
      | `#speed`              | **110** |

    - An `img` element with the `id` **"sprite"** should be added to the page, with its `src` set to Gengar's `front_default` sprite.
    - The `#types` element should contain **two inner elements** with the values **GHOST** and **POISON**.
    - The `#types` content should be **cleared between searches**.

---

## **Completion Criteria**
✅ Fulfill all user stories.  
✅ Pass all test cases.  
✅ Apply personal styling to enhance UI/UX.  
✅ Ensure the app functions correctly and efficiently.

🚀 **Happy Coding!**
