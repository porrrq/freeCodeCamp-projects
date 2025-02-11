# Medical Data Visualizer

In this project, you will visualize and make calculations from medical examination data using **matplotlib, seaborn, and pandas**. The dataset values were collected during medical examinations.

## Data Description

The rows in the dataset represent patients, and the columns represent information like **body measurements, blood test results, and lifestyle choices**. You will use the dataset to explore the relationship between **cardiac disease, body measurements, blood markers, and lifestyle choices**.

**File name:** `medical_examination.csv`

### Dataset Features

| Feature                         | Variable Type       | Variable      | Value Type                          |
|----------------------------------|--------------------|--------------|-------------------------------------|
| **Age**                          | Objective Feature  | `age`         | int (days)                          |
| **Height**                       | Objective Feature  | `height`      | int (cm)                            |
| **Weight**                       | Objective Feature  | `weight`      | float (kg)                          |
| **Gender**                       | Objective Feature  | `gender`      | categorical code                    |
| **Systolic blood pressure**       | Examination Feature | `ap_hi`       | int                                 |
| **Diastolic blood pressure**      | Examination Feature | `ap_lo`       | int                                 |
| **Cholesterol**                   | Examination Feature | `cholesterol` | 1: normal, 2: above normal, 3: well above normal |
| **Glucose**                       | Examination Feature | `gluc`        | 1: normal, 2: above normal, 3: well above normal |
| **Smoking**                       | Subjective Feature | `smoke`       | binary                              |
| **Alcohol intake**                | Subjective Feature | `alco`        | binary                              |
| **Physical activity**             | Subjective Feature | `active`      | binary                              |
| **Presence of cardiovascular disease** | Target Variable | `cardio`      | binary                              |

---

## Instructions

You will create a **chart** similar to `examples/Figure_1.png`, where the counts of **good and bad outcomes** for `cholesterol, gluc, alco, active, and smoke` are displayed for **patients with** `cardio=1` **and** `cardio=0` in different panels.

Follow the numbered instructions below and update the **`medical_data_visualizer.py`** file accordingly.

### 1. Data Import
- Import the data from `medical_examination.csv` and assign it to the variable `df`.

### 2. Add an Overweight Column
- Determine if a person is overweight using **BMI**:
  - **BMI formula:**  
    \[
    BMI = \frac{\text{weight (kg)}}{\text{height (m)}^2}
    \]
  - If **BMI > 25**, mark the person as overweight (`1`), otherwise (`0`).

### 3. Normalize Data
- Convert `cholesterol` and `gluc` values:
  - If the value is **1**, set it to **0** (good).
  - If the value is **more than 1**, set it to **1** (bad).

### 4. Draw the Categorical Plot
- Create a **DataFrame** (`df_cat`) using `pd.melt()` with values from:
  - `cholesterol, gluc, smoke, alco, active, overweight`
- Group and reformat `df_cat`:
  - Split the data by **cardio**.
  - Show the **counts** of each feature.
  - Rename one column for `sns.catplot()` to work correctly.
- Convert the data into **long format** and generate a **categorical plot**:
  ```python
  sns.catplot()
  ```
- Store the figure in the variable `fig`.

⚠️ **Do not modify the next two lines in the code.**

---

### 5. Draw the Heat Map
- **Clean the data** (`df_heat`) by **removing incorrect values**:
  - **Diastolic pressure (`ap_lo`) must be less than or equal to systolic pressure (`ap_hi`).**  
    ```python
    df['ap_lo'] <= df['ap_hi']
    ```
  - **Filter out height values below the 2.5th percentile and above the 97.5th percentile.**
  - **Filter out weight values below the 2.5th percentile and above the 97.5th percentile.**

- **Compute the Correlation Matrix** and store it in `corr`.
- **Generate a mask** for the upper triangle and store it in `mask`.
- **Set up the matplotlib figure.**
- **Plot the heatmap** using:
  ```python
  sns.heatmap()
  ```
- Store the figure in the variable `fig`.

⚠️ **Do not modify the next two lines in the code.**

---

## Development

- Write your code in **`medical_data_visualizer.py`**.
- For development, you can use **`main.py`** to test your code.

## Testing

- The unit tests for this project are in **`test_module.py`**.
- We have already imported the tests into **`main.py`** for your convenience.

## Submitting

- Copy your project’s **URL** and submit it to **freeCodeCamp**.
