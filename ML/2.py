# prepare data
from pandas import Series
series = Series.from_csv('test1.csv', header=0)
X = series.values
X = X.astype('float32')
train_size = int(len(X) * 0.50)
train, test = X[0:train_size], X[train_size:]