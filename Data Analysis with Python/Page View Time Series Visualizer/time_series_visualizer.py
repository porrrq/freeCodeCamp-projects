import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv('fcc-forum-pageviews.csv',parse_dates=["date"],index_col="date")

# Clean data
df = df[
    (df.value <= df.value.quantile(0.975)) &
    (df.value >= df.value.quantile(0.025))
    ]


def draw_line_plot():
    # Draw line plot
    fig, ax = plt.subplots(figsize=(10,5))
    ax.plot(df.index,df['value'],color='red')
    ax.set_xlabel('Date')
    ax.set_ylabel('Page Views')
    ax.set_title('Daily freeCodeCamp Forum Page Views 5/2016-12/2019')

    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig

def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df_bar = df
    df_bar['year'] = df_bar.index.year
    df_bar['month'] = df_bar.index.month

    groupped_df = df.groupby(['year','month'])['value'].mean().reset_index()

    pivot_index_is_year = groupped_df.pivot(index='year',columns='month',values='value')

    # Draw bar plot
    fig = pivot_index_is_year.plot(kind="bar",xlabel="Years",ylabel="Average Page Views",figsize=(8,8))
    fig.legend(['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'],title="Months")

    # Save image and return fig (don't change this part)
    fig =fig.get_figure()
    fig.savefig('bar_plot.png')
    return fig

def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]
    df_box.sort_values(by=["month"])

    # Draw box plots (using Seaborn)
    fig,ax = plt.subplots(1,2,figsize=(20,8))
    tick = [i for i in range(0,200001,20000)]

    for a in ax:
        a.set_yticks(tick)
        a.set_ylim(0,200000)
        a.set_ylabel("Page Views")

    ax[0].set_title("Year-wise Box Plot (Trend)")
    ax[1].set_title("Month-wise Box Plot (Seasonality)")
    ax[0].set_xlabel("Year")
    ax[1].set_xlabel("Month")
    ax[1].set_xticklabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    

    sns.boxplot(
        x='year',
        y='value',
        data=df_box,
        hue='year',
        ax=ax[0],
        palette="deep",
        flierprops=dict(marker='D', markersize=1),
        legend=False,
        
    )
    sns.boxplot(
        x='month',
        y='value',
        data=df_box,
        hue='month',
        ax=ax[1],
        palette="bright",
        flierprops=dict(marker='D', markersize=1),
        legend=False
    )

    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig
