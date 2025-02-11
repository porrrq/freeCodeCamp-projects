import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# 1
df = pd.read_csv("medical_examination.csv")

# 2
df['overweight'] = (df['weight'] / (df['height']/100)**2 > 25).astype(int)
df['overweight']

# 3
df['cholesterol'] = (df['cholesterol'] > 1).astype(int)
df['gluc'] = (df['gluc'] > 1).astype(int)

# 4
def draw_cat_plot():
    # 5
    df_cat = pd.melt(df,id_vars=['cardio'],value_vars=['cholesterol', 'gluc', 'smoke', 'alco', 'active', 'overweight'])

    # 6
    df_cat = df_cat.groupby(['cardio','variable'])['value'].value_counts()
    
    # 7
    df_cat_long = df_cat.reset_index(name='total')

    # 8
    fig = sns.catplot(
            data=df_cat_long,
            hue='value',
            x='variable',
            y='total',
            col='cardio',
            kind="bar",
            errorbar=None
        )


    # 9
    fig = fig.fig
    fig.savefig('catplot.png')
    return fig


# 10
def draw_heat_map():
    # 11
    df_heat = df[
            #diastolic pressure is higher than systolic
            (df['ap_lo']<=df['ap_hi']) &
            #Remove data that has height more than the 97.5th percentile , less than the 2.5th percentile
            (df['height']>=df['height'].quantile(0.025)) &
            (df['height']<=df['height'].quantile(0.975)) &
            #Remove data that has weight more than the 97.5th percentile , less than the 2.5th percentile
            (df['weight']>=df['weight'].quantile(0.025)) &
            (df['weight']<=df['weight'].quantile(0.975))
            ]

    # 12
    corr = df_heat.corr()

    # 13
    mask = np.triu(np.ones_like(corr,dtype=bool))



    # 14
    fig, ax = plt.subplots(1,1,figsize=(8, 7),constrained_layout=True)

    # 15
    heatmap_plot = sns.heatmap(
    corr,
    square=True,
    mask=mask,
    vmax=0.30,
    center=0,
    annot=True,
    fmt="0.1f",
    linewidths=.5,
    annot_kws={'fontsize': 8}, 
    cbar_kws={"shrink": .75},
    ax=ax
    )

    # 16
    fig.savefig('heatmap.png')
    return fig
