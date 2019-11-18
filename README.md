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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbSIsImlhdCI6MTU3NDEwODE2MCwiZXhwIjoxNTc0MTM2OTYwfQ.NuVpPq9uQ4QqKrP6U4ZML63U7sjXyh4ytTzOmY-qLoU",
  "id": "5"
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

**All User Endpoints have authentication and are looking for the following header, token will be different for each user**

### Headers

**Expected headers**
```
Content-Type: application/json

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbSIsImlhdCI6MTU3NDEwMTUwNiwiZXhwIjoxNTc0MTMwMzA2fQ.SfYjz_Lmto8wTAIyDnwxxSb6-lJyF1F3GuJJQwYB_tA
```

### GET all Categories

> Endpoint: /api/categories/

### Return Response

```
[
  {
    "id": 1,
    "name": "Puppies",
    "imageUrl": "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg"
  },
  {
    "id": 2,
    "name": "Architecture",
    "imageUrl": "https://images.freeimages.com/images/large-previews/fe0/architecture-1216049.jpg"
  }
]
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```

### GET specific Category

> Endpoint: /api/categories/:id

### Return Response

```
  {
    "id": 1,
    "name": "Puppies",
    "imageUrl": "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg"
  }
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find a category with the given id."
}
```

### GET all Users

> Endpoint: /api/users/

### Return Response

```
[
  {
    "id": 1,
    "username": "VTe",
    "email": "VTe.Dev@top-nine.com"
  },
  {
    "id": 2,
    "username": "JNo",
    "email": "JNo.Dev@top-nine.com"
  },
  {
    "id": 3,
    "username": "NAn",
    "email": "NAn.Dev@top-nine.com"
  },
  {
    "id": 4,
    "username": "COr",
    "email": "COr.Dev@top-nine.com"
  },
  {
    "id": 5,
    "username": "Tim",
    "email": "TimNotTom.Dev@top-nine.com"
  }
]
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "User credentials were not provided."
}
```
### GET specific User

> Endpoint: /api/users/:id

### Return Response

```
{
  "id": 1,
  "username": "VTe",
  "email": "VTe.Dev@top-nine.com"
}
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find a user with the given id."
}
```

* * *

### POST Category

> Endpoint: /api/categories/

### Expected Data

> imageUrl is **not** required for posting categories. 

```
{
	"name": "Houses",
	"imageUrl": "https://images.unsplash.com/photo-1574053129807-0fb8065719bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=679&q=80",
	"user_id": 2
}
```

### Return Response

```
{
  "message": "The category was successfully created."
}
```

### Errors

> Category name and imageUrl **Must** be unique to create a new category.

```
{
  "message": "Invalid user credentials."
}
```
* * *

### DELETE Category

> Endpoint: /api/categories/:id

### Return Response

```
{
  "message": "The category was successfully deleted."
}
```

### Errors
```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find the category with the specified id."
}
```

### DELETE User

> Endpoint: /api/users/:id

### Return Response

```
{
  "message": "The user was successfully deleted."
}
```

### Errors
```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find the user with the specified id."
}
```

