/** * @param LoginPageData Information about the Login page data.
 * For example:
 * @param LoginPageData.ValidUserName The name of the user. 
 * @param LoginPageData.email   The email of the user.
 * @param LoginPageData.Browser  List of browser that you want to run
 */ 
 
let LoginPageData={
    ValidUserName:"sajid.saiyed.automationtesting@gmail.com",
    ValidPassword:"Sajid?7867",
    InvalidUserName:"sajid.saiyed.automationtesting@gmail.com",
    InvalidPassword:"Sajid?78678",
    EmptyUserName:"",
    EmptyPassword:"",
    Browser:['chrome','firefox']
}
module.exports=LoginPageData;