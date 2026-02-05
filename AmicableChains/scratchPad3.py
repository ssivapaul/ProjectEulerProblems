
L = 5
ds = [0] * (L + 1)
for i in range(1, L // 2 + 1):
    for j in range(i * 2, L + 1, i):
        ds[j] += i
ans, longest, seen = 0, 0, {}
for i in range(1, L + 1):
    if i not in seen:
        ch, c, path = {i}, ds[i], [i]
        while c <= L and c >= i and c not in ch:
            ch.add(c); path.append(c); c = ds[c]
        if c == i:
            l = len(ch)
            if l > longest:
                longest, ans = l, i
            for x in path:
                seen[x] = l
print(ans)	
print("End of run...")