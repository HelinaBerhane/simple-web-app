# Hello World

- [x] make a github repository

- [x] write a react frontend that shows the text "Hello World"
  - [x] `npx create-react-app frontend`
  - [x] `cd frontend`
  - [x] write `frontend/src/App.js`

- [x] write a golang backend api endpoint that returns the text "Hello World!"
  - [x] `go mod init backend`
  - [x] write `backend/main.go`
  - [x] check that the api works with `curl http://localhost:8080/api`

- [x] make the react frontend query the api and show the returned text
  - [x] check that navigating to localhost shows the app

- [x] setup the vps
  - [x] sign up with a vps provider
  - [x] make a vps
    - [x] generate ssh keys `ssh-keygen -t ed25519`
  - [x] get the IP of the vps
  - [x] connect to the vps using ssh
    - [x] fix issues connecting

- [ ] run your code on the vps
  - [ ] clone and run your repo on the vps
  - [ ] set a budget alert to avoid unexpected costs
  - [ ] move the api url in the frontend to .env

- [ ] setup the domain
  - [x] buy a domain
  - [ ] point your domain at the vps
  - [ ] check that navigating to your domain shows the app

# CRUD

- [ ] decide on a basic data model (e.g. Tasks)
- [ ] add a database to store data in the backend
- [ ] add CRUD endpoints to the backend
  - [ ] create
  - [ ] read
  - [ ] update
  - [ ] delete
- [ ] add CRUD functionality to the frontend
  - [ ] create
  - [ ] read
  - [ ] update
  - [ ] delete

# User Authentication

- [ ] decide how you want to handle user authentication
