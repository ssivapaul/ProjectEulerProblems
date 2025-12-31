
L = 20
calc = lambda wh: L - (wh - 1)//2 if wh > L else wh//2
print(calc(21))