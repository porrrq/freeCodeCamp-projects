import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv("epa-sea-level.csv")

    # Create scatter plot
    plt.scatter(
        data=df,
        x='Year',
        y='CSIRO Adjusted Sea Level',
        color='blue'
    )

    # Create first line of best fit
    reg = linregress(
        x = df['Year'],
        y = df['CSIRO Adjusted Sea Level']
    )
    predicted = pd.Series([y*reg.slope+reg.intercept for y in range(1880,2051,1)])
    
    plt.plot(
        pd.Series([y for y in range(1880,2051,1)]),
        predicted,
        color="red"
    )

    # Create second line of best fit
    df2 = df[df['Year']>=2000]
    reg2 = linregress(
        x = df2['Year'],
        y = df2['CSIRO Adjusted Sea Level']
    )
    predicted2 = [y*reg2.slope+reg2.intercept for y in range(2000,2051,1)]
    
    plt.plot(
        pd.Series([y for y in range(2000,2051,1)]),
        predicted2,
        color="lime"
    )
    # Add labels and title
    plt.title("Rise in Sea Level")
    plt.ylabel("Sea Level (inches)")
    plt.xlabel("Year")

    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()