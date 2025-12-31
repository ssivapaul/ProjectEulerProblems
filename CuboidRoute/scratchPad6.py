

M = 10
qz = [0] * (M + 1)
big = [set() for _ in range(M + 1)]
calc = lambda wh: L - (wh - 1)//2 if wh > L else wh//2

for m in range(2, M):
    #print(min(m, M // m + 1), (m, M // m + 1))
    for n in range(1, min(m, M // m + 1)):
        #print(m, n)
        for wh, L in ((m*m - n*n, 2*m*n), (2*m*n, m*m - n*n)):
            if wh <= 2 * L:
                print(wh, L)
                for i in range(1, M // L + 1):
                    big[L*i].add(wh*i)

running_sum = 0
for L in range(1, M + 1):
    #for wh in big[L]:
        #print(wh)
    running_sum += sum(calc(wh) for wh in big[L])
    qz[L] = running_sum
print(qz)
    
    
#print("Hellow World")
#
#for _ in range(int(input())):
    #print(qz[int(input())])	
#print(qz)
    