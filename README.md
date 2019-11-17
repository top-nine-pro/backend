# My Top Nine -- Backend

**Register Users**

> Endpoint: 

### Expected Data

```
{
	"username": "Testing",
	"password": "Password123",
	"email": "Testing@top-nine.com"
}
```

### Return Response

`"Testing has been successfully created."`

### Errors - Credentials or Unique Username

```
{
  "messsage": "Invalid credentials for account creation.",
  "errors": [
    "Please include a username with at least 2 characters.",
    "Please include a password with at least 3 characters.",
    "Please include an email."
  ]
}
```

```
"There was an error with registration: Error: insert into `users` (`email`, `password`, `username`) values ('Testing@top-nine.com', '$2a$12$8mvPktgjaPFgfa4a1vKo6u6iMmbTWiT/apEWicuxNcE9rEmeg.TXq', 'Testing') - SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email."
```

**Login Users**

> Endpoint: 

### Expected Data

```
{
	"username": "Tim",
	"password": "NotTomFromMyspace"
}
```

### Return Response

```
{
  "message": "Welcome back Tim!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbSIsImlhdCI6MTU3NDAyODAyMywiZXhwIjoxNTc0MDU2ODIzfQ.8_bUJXCIE9zD0crWk_W3FaacAceVue3WOEmwi9YqNS0"
}
```

### Errors

```
{
  "message": "Invalid user credentials, unauthorized."
}
```