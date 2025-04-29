# Function to check if a number is odd or even
def ev(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Example usage
num = int(input("Enter a number: "))
result = ev(num)
print(f"The number {num} is {result}.")
