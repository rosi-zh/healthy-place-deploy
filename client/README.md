# Welcome to Healthy Place
**Healthy Place** is website about healthy lifestyle. This website is developed for Softuni as final project for ReactJS course. 
For its creation ReactJS, HTML, CSS and Bootstap as used. Back end - Softuni practice server. 

# Installation and usage
1. Clone this repository to your local machine. Clone link: https://github.com/rosi-zh/React-Final-Project.git
2. Open project and navigate to server folder
3. Start backend server with command: ```node server.js```
     - server will start on: http://localhost:3030
4. To start client part navigate to client folder
5. Run: ```npm install``` - to install all packages and dependencies
6. Run: ```npm run dev``` - to start dev sever:
    - server will start on: http://localhost:5173

# Deployment
**Healthy Place** website is deployed on: https://healthy-place-project.web.app/

# Brief overview
The project is separated in to two roles - Guest and User.

## Account types
- **Guest** - The **_Guest_** profile allows you to browse through the site
- **User** - The **_User_** profile gives you access to profile page, adding article, editing and deleting owned articles. Also
logged users can like/unlike other authors articles.

### User profile
- **Users** needs to Login with email and password.
- **Users** can access their personal profile page.
- **Users** can edit owned articles.
- **Users** can delete owned articles.
- **Users** can like/unlike other user's articles.

There are 2 already registered user, which can be used for immediate testing:
- user: peter@abv.bg password: 123456
- user: george@abv.bg password: 123456

## Home Page
![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/79882c09-3595-43f6-96fb-764a0ce350de)
![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/6248c797-3451-4803-a5e9-bc2dc21d30dd)

## Page Navigation

### Guest View
***Navigation bar view from guest***

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/6a59ee56-3a66-4f95-8b90-dcba9d145913)

### User View
***Navigation bar view from user***

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/3b859174-36a5-4c05-9403-40968258ace9)

### Footer
***The footer is visible on every page***

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/d2f51978-a82c-4ee7-b137-7acc9321a6b4)

## Registration page

### _User registration form expects the following inputs:_
- **_First name_**;
- **_Last name_**;
- **_Email_** address;
- **_Password_**;
- Repeat **_Password_**;

**_The user password needs to be minimum 6 characters long._**

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/dc211bd8-a2d5-4707-aec7-85b7b2efd7ca)

## User Login page
### _User Login form expects the following inputs:_
- **_email_** address;
- **_password_**;

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/f6bc703c-4e81-4fff-b799-82429adb2668)

## User profile page

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/54df1317-8aac-4ba5-9947-609bea816d06)

## Articles catalog

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/e93df454-4911-4eb4-89c9-7836754bde16)

## Article details page

### For unauthenticated users

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/623d7f81-5708-4d61-9e5a-e59841e92fd5)

### Authenticated user(not owner) 

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/bf642d52-0076-493d-94f5-f8fbcc6902c8)

### Authenticated user who is owner of article

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/72a459e5-5a31-47a3-9668-c5b2110b49ff)

## Create article page

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/60d93d1d-cc70-49c5-bc1d-47df25e5a7ea)

## Edit article page

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/74d9fff8-d1e6-449f-aff1-a840e9bff3d1)

## Delete article

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/ca9df1c5-9418-4330-b01e-b3f956bc6945)

## About page

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/69a58bda-c462-4763-8f42-35a5f19f772f)

## Contacts page

![image](https://github.com/rosi-zh/React-Final-Project/assets/114585722/57ef27b6-c678-4011-96be-de77b83d721e)

# License
The project is release under MIT license.
