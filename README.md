# Clean todo app

A simple todo-app with user and todos as entity to demo a clean arch.

## Layers

The Infrastructure depends on both the Domain and Application. The Application can only depend on the Domain. The Domain has no dependencies.

-   Domain: Has the models (entities), has no logics, has constants and enums used by the model domain. etc
-   Application: Has logic, DTOs
-   Infrastructure
