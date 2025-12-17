
#n = input().split()
#n, k = map(int, input().split())
#print(n)	

names = ["GO", "A1", "CC1", "A2", "T1", "R1", "B1", "CH1", "B2", "B3", "JAIL",
             "C1", "U1", "C2", "C3", "R2", "D1", "CC2", "D2", "D3", "FP", "E1",
             "CH2", "E2", "E3", "R3", "F1", "F2", "U2", "F3", "G2J", "G1", "G2",
             "CC3", "G3", "R4", "CH3", "H1", "T2", "H2"]
squares = {name: i for i, name in enumerate(names)}

def find_next(current, prefix):
    for step in range(1, len(names) + 1):
        nxt = (current + step) % len(names)
        if names[nxt].startswith(prefix):
            return nxt
    return current
#---------------------------------------------------
next_r = [find_next(i, 'R') for i in range(len(names))]
next_u = [find_next(i, 'U') for i in range(len(names))]

dice = 2
roll = [a1 + a2 for a1 in range(1, dice +1) for a2 in range(1, dice +1)]
print(roll)

rolls = [d1 + d2 for d1 in range(1, dice +1) for d2 in range(1, dice +1)]

#print(rolls)