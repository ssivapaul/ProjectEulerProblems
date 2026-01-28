

def f(v):
    if len(v)==1: return{v[0]}
    s = set()
    for i in range(len(v)):
        for j in range(i+1, len(v)):
            a,b = v[i],v[j]
            r = [v[k] for k in range(len(v)) if k not in (i,j)]
            s|= f(r+[a+b])
            s|= f(r+[abs(a-b)])
            s|= f(r+[a*b])
            if b>0: s|= f(r+[a/b])
            if a>0: s|= f(r+[b/a])
    return s

input()  # dgas
d = list(map(int, input().split()))
numbers = {round(x) for x in f(d) if abs(x - round(x)) < 1e-9}
n = 1
while n in numbers: n+= 1
print(n-1)	


from  operator import add, sub, mul, truediv
import itertools
def seq_length(s, c=1):
	while c in s: c+= 1
	return c-1

maxt, maxs = 0, 0
for terms in itertools.combinations(range(1, 10), 4):
	s = set()
	for n in itertools.permutations(terms):
		for op in itertools.product([add, mul, sub, truediv], repeat=3):
			x = op[0](op[1](n[0],n[1]),op[2](n[2],n[3]))    # (a.b).(c.d)
			if x%1 == 0 and x > 0: s.add(int(x))
			x = op[0](op[1](op[2](n[0],n[1]),n[2]),n[3])    # ((a.b).c).d
			if x%1 == 0 and x > 0: s.add(int(x))
		if seq_length(s) > maxs: maxs, maxt = seq_length(s), terms

print "Terms that produce longest set of consecutive digits", ''.join(str(i) for i in maxt)