# -*- coding: utf-8 -*-
"""02.18_linearRegression.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1q4CB7P5yzYbisj9Ak07lTEWaIvJid7qA
"""

#선형회귀모델 예제
# 연속값을 출력한다.
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.keras import Sequential,Input
from tensorflow.keras.layers import Dense

#훈련데이터 생성
#x 데이터 - 문제 - 독립변수
x = np.array([[12],[24],[27],[36],[48],[72],[96],[100]])
#y 데이터 - 라벨 - 타겟변수 - 종속변수
y = np.array([50,70,65,75,80,90,96,100])
#xdata는 공부시간, ydata 성적
# 공부시간에 따른 성적 분석
# 임의 공부시간을 입력하여 취득할수 있는 성적 점수를 예측
print(x.shape)
print(y.shape)

#공부시간과 성적의 연관성 확인
plt.scatter(x,y)
plt.show()

#x, y 데이터의 전처리 수행
# x 데이터를  정규분포로 표준화 수행 , - 데이터들의 편차가 심할경우와 너무 큰수는 모델이
#     훈련하여 가중치 정착에 에로사항이 있다.
x_mean = np.mean(x)#x data의 평균
x_std = np.std(x) # x data의 표준편차
x_normal_scaled = (x-x_mean)/x_std # 정규분포변경
print(x_normal_scaled)

#모델의 구성
model = Sequential()
model.add(Input(shape=(1,)))#입력모양에 갯수는 입력하지 않는다.
model.add(Dense(1,activation="relu"))

#모델의 컴파일
model.compile(loss="mse",optimizer="SGD",metrics=["mse"])

fit_history = model.fit(x_normal_scaled,y,epochs=200)

print(fit_history.history.keys())

#훈련결과 그래프 분석(시각화)
print(len(fit_history.history["loss"]))
print(len(fit_history.history["mse"]))

plt.plot(fit_history.history["loss"],label="LOSS")
plt.plot(fit_history.history["mse"],label="MSE")
plt.legend()
plt.title("Linear Analize")
plt.xlabel("epochs")
plt.ylabel("value")
plt.show()

# 연속데이터 선형은 평가가 힘들다
result = model.evaluate(x_normal_scaled,y)
print(result)

# 예측데이터 생성
x_pred = np.array([[14],[18]])#공부시간이 14시간, 18시간 공부했을때 성적 예측
x_normal_pred = (x_pred-x_mean)/x_std # 정규분포변경
print(x_normal_pred)

y_pred = model.predict(x_normal_pred)
print(y_pred)#예측 성적 출력

