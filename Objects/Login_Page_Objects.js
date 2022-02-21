/** * @param LoginPageObjects Information about the Login page xpath.
 * For example:
 * @param LoginPageObjects.UserName The xpath of Username 
 * @param LoginPageObjects.assword  The xpath of Password
 */ 
let LoginPageObjects={
    UserName:"//input[@id='email']",
    Password:"//input[@id='password']",
    ErrorMessage:"//form[@class='login-container']//p[contains(text(),'We')]",
    LoginButton:"//button[@id='logIn']",
    RememberMeLabel:"//div[@class='checkbox-container']//label[@class='form__label--custom']",
    RememberMeInputBox:"//div[@class='checkbox-container']//label[@class='form__label--custom']"
};

module.exports=LoginPageObjects;