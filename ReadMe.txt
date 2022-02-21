1. Project Title:
- Hudl_test- Automate the Login functionality.

2. Project Description: 
- This framework is following the BDD pattern.
- This framework generates a test report for each test case. You fill find the test report in the Test_Report folder. 
- This framework will test the login functionality in multiple browser(chrome, firefox) and execute parallely.

* I am using the MVC pattern, I have divided codes into following modules: 
2.1.1 Objects: It contains all xpaths of login page
2.1.2 Data : It contains all data of login page
2.1.3 Pages: It is collocation of different test cases 
2.1.4 Controller : It contains all  methods to perform different actions such as intinazlie driver , find elements,click, etc.

* Advtanges of this framework:
-- Easy to Maintain
For example: if you want to change a xpath or data of the login page, then you do not need to go in the-
test case and change your code. You can change directly that xpath or data from your Object and data file.
Without touching your script file.
-- Reusability
For example:
You do not need to write find elements or click  methods for each page(test cases). 
You can directly call those methods from the controller. So it helps you to avoid duplicate codes.
-- Less dependent
-- Flexibility



3. Getting Started:

* Required Packages: 
- Selenium Webdriver : Selenium  Webdriver is a browser automation library.
- Chrome driver: It is a standalone server that Selenium WebDriver uses to launch Google Chrome.
- Gecko driver :   It is a standalone server that Selenium WebDriver uses to launch Firefox.
- Mocha : It is a JavaScript test framework.
- Chai : It is  an assertion library.
- Mochawesome : It allows you to create standalone HTML/CSS test reports.

* Please perform following steps to run project: 
    3.1  To install all dependencies- Type=  npm install
    2.2  To run project- Type= npm test

4. Author:
Sajidali Saiyed: sajid.saiyed.automationtesting@gmail.com
Project Link:  https://github.com/sajidengg/Hudl_Test.git


5. Version: 
1.0 


Note: In javascript function behave same as class, that is reason i have not used class syntax:
For example : class Login{}, function Login{} both are same in JavaScript.


