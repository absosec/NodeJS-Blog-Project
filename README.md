# Overview
This project is a Node.js web application utilizing MongoDB for the backend database, designed to perform CRUD (Create, Read, Update, Delete) operations efficiently.

# Installation Instructions

To download NodeJS Blog Project repository from GitHub to your local machine and then navigates into the newly cloned project directory run the following command.
```
git clone https://github.com/rO0AB/NodeJS-Blog-Project.git && cd NodeJS-Blog-Project/ 
```

To install all the dependencies listed in the package.json file run the following command.
```
npm install
```

If you want to use the e-mail features of the application, you need to change the SMTP credentials in the /routes/contact.js file.
```
auth: {
  user: "admin@admin.com", // CHANGE_THIS
  pass: "password", // CHANGE_THIS
}
```

To start a local development server and serve your Laravel application run the following command.
```
node app.js
```
