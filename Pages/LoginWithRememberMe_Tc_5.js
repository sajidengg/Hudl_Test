/** * 
* @param LoginObject It import login page's object
* @param LoginData It import login pages's data
* @param  generic  It imports all method to pefom different action such as initialize driver, find elements etc.
* @param expect    It import chai library to assert 
// 1.The  function LoginWithValidRememberMe() contians logic to validate the login test case using the remember-me text 
// 2. `describe()` is grouping test cases
// 3. `it()` is a test case
// 4. `before()`, is a hook to initialize driver
 //5. `after()`,  is a hook to close broswer
*/ 

const LoginObject = require("../Objects/Login_Page_Objects.js");
const LoginData = require("../Data/Login_Page_Data.js");
let generic = require("../Controller/Generic.js");
const { expect } = require('chai');


let LoginWithValidRememberMe = async function () {
    LoginData.Browser.forEach((browserType) => {
        try {
            describe("Check the rememebr-me label on the login page: " + browserType, () => {

                before("Intizaling driver", async () => {
                    await generic.LaunchServer("https://www.hudl.com/login", browserType);
                })
                it("Enter User Name", async () => {

                    await generic.SendData(LoginObject.UserName, LoginData.ValidUserName);
                })
                it("Enter Password", async () => {
                    await generic.SendData(LoginObject.Password, LoginData.ValidPassword);

                })
                it("Check the remeber-me label present or not", async () => {
                    await generic.WaitForWhile();
                    let rememberMeText = await generic.getTextOfElement(LoginObject.RememberMeLabel);
                    await expect(rememberMeText).to.equal("Remember me");
                })

                it("Click on the remember-me check box", async () => {
                    await generic.Click(LoginObject.RememberMeInputBox);
                    await generic.WaitForWhile();
                })

                it("Click on the Login buttton", async () => {
                    await generic.Click(LoginObject.LoginButton);
                    await generic.WaitForWhile();
                })
                it("verify the title of page", async () => {
                    await generic.WaitForWhile();
                    let titleOfPage = await generic.GetTitle();
                    await expect(titleOfPage).to.equal("Home - Hudl")
                })

                after("Closed the browser", async () => {
                    await generic.ClosedServer();
                })
            })
        }
        catch (error) {
            console.log(error)
        }
    })
}

LoginWithValidRememberMe()