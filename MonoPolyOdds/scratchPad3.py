
dice = 6
rolls = [d1 + d2 for d1 in range(1, dice +1) for d2 in range(1, dice +1)]
#print(rolls)

trans_Square = 3
names = 40
x = (trans_Square - 13) % names
print(x)