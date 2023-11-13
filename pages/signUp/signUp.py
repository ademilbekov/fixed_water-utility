Users = open("Users.txt", "w")
 
status = ""
 
def displayMenu():
    status = input("Are you registered user? y/n? Press q to quit")
    if status == "y":
        oldUser()
    elif status == "n":
        newUser()
 
def newUser():
    createLogin = input("Create login name: ")
 
    if createLogin in Users:
        print("\nLogin name already exist!\n")
    else:
        createPassw = input("Create password: ")
        Users.write(createLogin,createPassw)
        print("\nUser created\n")
 
def oldUser():
    login = input("Enter login name: ")
    passw = input("Enter password: ")
 
    if login in Users and passw in Users:
        print("\nLogin successful!\n")
    else:
        print("\nUser doesn't exist or wrong password!\n")
 
 
while status != "q":
    displayMenu()