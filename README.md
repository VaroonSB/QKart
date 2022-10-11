# Qkart-Backend
<a href = "https://qkart-backend-v1.netlify.app/" >:rocket: Demo Link</a>
<h3>A React.js E-commerce application</h3>
<p>QKart is an E-commerce application offering a variety of products for customers to choose from.</p>
<p>:arrow_right: Description of the application:</p>

 &nbsp; :ballot_box_with_check: Built the complete set of REST APIs for an E-commerce application following the best practices
 
 &nbsp; :ballot_box_with_check:Followed a layered approach for easy maintenance
 
 &nbsp; :ballot_box_with_check:Used MongoDB NoSQL database for data storage
 
 &nbsp; :ballot_box_with_check:Implemented multiple authentication schemes
 
 &nbsp; :ballot_box_with_check:Wrote unit and integration tests to test the implementation
 
<div align="center">
<img src = "https://ctrly.blog/wp-content/uploads/2022/01/nodejs-layered-architecture-diagram-1024x763.png" width="700" height="400">
  <p>QKart Layered Architecture</p>
</div>

<hr></hr>
<p>:arrow_right:Set up application and implement the first API </p>

 &nbsp; :ballot_box_with_check: Implemented GET /v1/users API endpoint to send user data to clients
 
 &nbsp; :ballot_box_with_check:Followed a layered approach to implement the request-response cycle for ease of maintenance
 
 &nbsp; :ballot_box_with_check:Used Mongoose (Node.js-MongoDB ODM) to fetch user data from MongoDB
 
 &nbsp; :ballot_box_with_check:Defined JOI schema to easily validate client requests
 
 &nbsp; :ballot_box_with_check:Utilized middlewares to reduce code duplication
 
:hammer: Skills used: Node.js, Express.js, MongoDB, Mongoose ODM, JOI validation

<hr></hr>

<p>:arrow_right: Secure API endpoints and implement register/login APIs </p>

 &nbsp; :ballot_box_with_check: Implemented logic to generate short-lived JWT tokens
 
 &nbsp; :ballot_box_with_check: Set token authentication strategy by using the Passport library
 
 &nbsp; :ballot_box_with_check: Created POST APIs for user registration and login
 
 &nbsp; :ballot_box_with_check: Implemented password authentication to facilitate register / login flow
 
:hammer: Skills used: REST APIs, Token authentication, JWT Token, Password authentication, Hashing

<div align="center">
<img src = "https://www.vaadata.com/blog/wp-content/uploads/2016/12/JWT_tokens_FR-1.png" width="700" height="400">
  <p>JWT Token authentication flow for QKart APIs</p>
</div>

<hr></hr>

<p>:arrow_right: Implement APIs related to shopping cart </p>

 &nbsp; :ballot_box_with_check: Implemented the GET/POST/PUT API endpoints for a user’s shopping cart
 
 &nbsp; :ballot_box_with_check: mproved the GET /v1/users endpoint by supporting filtering for user address via query parameters
 
:hammer: Skills used: REST APIs, Filtered API Queries

<hr></hr>

<p>:arrow_right: Complete the checkout logic using TDD </p>

 &nbsp; :ballot_box_with_check: Added Jest-based assertions to unit tests for checkout requirements provided
 
 &nbsp; :ballot_box_with_check: Implemented the checkout logic in a Test-driven development style
 
 &nbsp; :ballot_box_with_check: Utilized integration tests to find and resolve bugs on integrating checkout logic to the application
 
:hammer: Skills used: Test-driven development, Unit testing, Integration testing, Jest framework

<hr></hr>

<p>:arrow_right: Deploy the QKart backend server</p>

 &nbsp; :ballot_box_with_check: Created a MongoDB instance on MongoDB Atlas cloud and uploaded products data to the cloud DB.
 
 &nbsp; :ballot_box_with_check: Deployed the QKart Node.js app to Heroku
 
 &nbsp; :ballot_box_with_check: Deployed the QKart React frontend to Netlify after configuring it to use the deployed Node.js backend.
 
:hammer: Skills used: MongoDB Atlas, Deployment, Heroku, Netlify
