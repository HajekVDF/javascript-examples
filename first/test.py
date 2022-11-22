n1, n2, nth = 0, 1, 0
input = int(input("Zadejte počet fibonacci čísel:"))
count = 0
if(input <= 0):
    print("Zadejte číslo větší než 0")
    quit()
print(n1,"\n",n2)
while count < input - 2:
    nth = n2 + n1
    print(nth)
    n1 = n2
    n2 = nth
    count += 1