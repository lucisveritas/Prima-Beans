import timeit

def nestedIf(drinkType, drinkSize):
    if drinkType = "Espresso Shot": 
        nestedIf = 3
    elif drinkType = "Long Mac":
        if drinkSize = "Small":
            nestedIf = 4.6
        else:
            nestedIf = 5
    elif drinkType = "Cappucino":
        if drinkSize = "Small":
            nestedIf = 4.5
        else:
            nestedIf = 5
    elif drinkType = "Flat White":
        if drinkSize = "Small":
            nestedIf = 4.3
        else:
            nestedIf = 4.8
    print(nestedIf)
    return nestedIf
    
def nestedCase():
    

def tupleLookup():
    

print("nestedIf" , timeit.repeat(stmt = nestedIf, repeat = 10, number = 10000000))

print("nestedCase" , timeit.repeat(stmt = nestedCase, repeat = 10, number = 10000000))

print("tupleLookup" , timeit.repeat(stmt = tupleLookup, repeat = 10, number = 10000000))

