import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
years=mdates.YearLocator()
months=mdates.MonthLocator()
df = pd.read_csv("test2.csv")
print(df)
df.plot()
plt.show()