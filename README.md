# [Workshot](https://mern-exercises-tracker.herokuapp.com/)

### In this App, we need 5 dependencies below:

- Express.js
- React.js
- Bootstrap
- Axios
- MongoDB

###Features to be added 
```
(1) Pre-Entered Exercise list (with Icons)
(2) Statistics Page
(3) Statistics ananlysis (with calories burnt & all)
(4) Firebase 'Sign In with Google' login Option
(5) Removal of Standard User register option
(6) Splash Screen
```
### Quick Start

```bash
# Install dependencies
- Backend
$ cd backend && npm install

- Frontend
$ cd frontend && npm install

# Database

Using MongoDB
Example: 
- const uri = mongodb+srv://<username>:<password>@cluster0-nqgmm.gcp.mongodb.net/test?retryWrites=true&w=majority


# Start App
- Backend
$ cd backend && npm run dev

- Frontend
$ cd frontend && npm run dev

App Run On: http://localhost:3000

```

### Test the APIs Using any API Client (Postman/Insomnia)

#### User Add : http://localhost:5000/users/add
Request : POST
Key :
  - username : ...
#### All User : http://localhost:5000/users
Request : GET
#### Add Exercises : http://localhost:5000/exercises/add
Request : POST
Key :
  - username : ...
  - description: ...
  - duration: ...
  - date: ...
#### Get Exercises By Id  : http://localhost:5000/exercises/:id
Request : GET
#### All Exercises  : http://localhost:5000/exercises
Request : GET
#### Update Exercises  : http://localhost:5000/exercises/update/:id
Request : POST
Key :
  - username : ...
  - description: ...
  - duration: ...
  - date: ...
#### DELETE Exercises  : http://localhost:5000/Qexercises/update/:id
Request : DELETE
#### All Exercises  : http://localhost:3000
  #### Add Exercises  : http://localhost:3000/create
  #### Update Exercises  : http://localhost:3000/edit/:id
  #### Add User  : http://localhost:3000/user

