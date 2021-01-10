# SIGN UP

> ## Success Cases
1. [] Receive a **POST** requisition in the **/api/signup** route.
2. [X] Validate obrigatory data **name**, **email** and **password**.
3. [X] Validate if the **email** is valid.
4. [X] Validate if already exists a user with the **email** provided.
5. [X] Generates an **encrypted** password.
6. [X] Create an account for the user with the data provided.
7. [] Generates an **access token** from the user ID.
8. [] Updates user data with the generated token.
9. [] Returns 201 with the access token and the user data without the password.

> ## Exceptions
1. [X] Returns **404** error if the api does not exist.
2. [X] Returns **400** error if name, email or password are not provided.
3. [X] Returns **400** error if email is invalid.
4. [] Returns **403** error if email already in use.
5. [X] Returns **500** error if password encryption fails.
6. [X] Returns **500** error if create account fails.
7. [X] Returns **500** error if generate access token fails.
8. [X] Returns **500** error if update user with access token fails.