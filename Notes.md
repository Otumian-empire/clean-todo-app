# Notes

This is are notes and any information on the clean-todo-app. Check the Readme as well.

## Entities

-   User

    -   id: number(Autogenerated)
    -   email: string
    -   username: string
    -   password: string
    -   isVerified: bool(false)
    -   isActive: bool(false)
    -   createdAt: datetime(current datetime)
    -   updatedAt: datetime(current datetime)

-   Todo
    -   id: number(Autogenerated)
    -   title: string
    -   body: string
    -   owner: ref->User by id
    -   bone: bool(false)
    -   createdAt: datetime(current datetime)
    -   updatedAt: datetime(current datetime)

## Tools/Packages

-   bcrypt
-   cors
-   dotenv
-   express
-   joi
-   jsonwebtoken
-   sqlite3
-   ts-node
-   tsc
-   typescript

## Folder structure
