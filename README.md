# My Top Nine -- Backend

## Register Users

> Endpoint: /api/auth/register

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

### Errors

> Username's **must** be unique to register a user.

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
* * *

## Login Users

> Endpoint: /api/auth/login

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

* * *

## User Endpoints