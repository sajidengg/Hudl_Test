/** * 
* @param LoginObject It import login page's object
* @param LoginData It import login pages's data
* @param  generic  It imports all method to pefom different action such as initialize driver, find elements etc.
* @param expect    It import chai library to assert 
// 1.The  function LoginWithEmptyUserName() contians logic to validate the login test case using empty username 
// 2. `describe()` is grouping test cases
// 3. `it()` is a test case
// 4. `before()`, is a hook to initialize driver
 //5. `after()`,  is a hook to close broswer
*/ 

const LoginObject = require("../Objects/Login_Page_Objects.js");
const LoginData = require("../Data/Login_Page_Data.js");
const generic = require("../Controller/Generic.js");
const { expect } = require('chai');

let LoginWithEmptyUserName = async function () {
    LoginData.Browser.forEach((browserType)=>{       
    try {
        describe("Check the login test case with empty username in: "+browserType, function () {
            before("Intizaling driver", async() => {
                await generic.LaunchServer("https://www.hudl.com/login",browserType);
            })
            it("Enter User Name", async () => {
                await generic.SendData(LoginObject.UserName, LoginData.EmptyUserName);
            })
            it("Enter Password", async() => {
                await generic.SendData(LoginObject.Password, LoginData.ValidPassword);
            })
            it("Click on Login buttton", async () => {
                await generic.Click(LoginObject.LoginButton);
                await generic.WaitForWhile();

            })
            it("verify the validation meessage", async () => {
                await generic.WaitForWhile();
                let ValidationMessage=await generic.getTextOfElement(LoginObject.ErrorMessage);
                await expect(ValidationMessage).to.equal("We didn't recognize that email and/or password. Need help?")
            })

            after("Closed browser", async () => {
                await generic.ClosedServer();
            })
        })
    }
    catch (error) {
        console.log(error)

    }
})
}

LoginWithEmptyUserName();