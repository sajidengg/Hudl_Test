/** 
 * 1. @param {Builder, By, Key, until}  are  objects  of selenium webdriver
 * 2. @param {chrome,firefox} It import chrome and firefox library
 * 3. function Launchserver()  To open a broswer
 * 4. function Sendata() To send data 
 * 4. function Click()  To click on element
 * 5. function ClosedServer  To close a broswer
 * 6. function GetTitle() To get tile of Page
 * 7. function WaitForWhile() To halt execution for MS time
 * 8. function getTextOfElement() To get get of anyb element
 */
let { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');
let chrome = require("../node_modules/selenium-webdriver/chrome");
let firefox = require("../node_modules/selenium-webdriver/firefox")
let driver,options;

exports.LaunchServer = async function (url, browserType) {
    if (browserType == "chrome") {
        try {
            options = new chrome.Options();
            options.addArguments("--start-maximized");
            options.addArguments("--test-type");
            options.addArguments("disable-infobars");
            driver = await new Builder().forBrowser("chrome").withCapabilities(options).build();
            await driver.manage().window().maximize();
            await driver.get(url)
        }
        catch (error) {
            console.log("Failed  to initialize chrome driver: " + error);
        }
    }
    else {

        try {
            driver = await new Builder().forBrowser("firefox").build();
            await driver.manage().window().maximize();
            await driver.get(url)
        }
        catch (error) {
            console.log("Failed  to initialize Firefox driver:" + error);
        }
    }
}

exports.SendData = async function (XPathOfElement, Data) {
    try {
        await driver.wait(until.elementLocated(By.xpath(XPathOfElement)), 5000);
        await driver.findElement(By.xpath(XPathOfElement)).sendKeys(Data)
    }
    catch (error) {
        console.log(error)
    }
}

exports.Click = async function (XPathOfElement) {
    try {
        await driver.wait(until.elementLocated(By.xpath(XPathOfElement)), 5000);
        await driver.findElement(By.xpath(XPathOfElement)).click();
    }
    catch (error) {
        console.log("Failed to clcik on element: " + error);
    }
}

exports.ClosedServer = async function () {
    try {
        await driver.quit();
    }
    catch (error) {
        console.log("Failed to close server: " + error)
    }
}

exports.GetTitle = async function () {
    try {
        return await driver.getTitle();
    }
    catch (error) {
        console.log("Failed to get title: " + error)
    }
}

exports.WaitForWhile = async function () {
    try {
        await driver.sleep(3000);
    }
    catch (error) {
        console.log("Failed to sleep: " + error);
    }
}

exports.getTextOfElement = function (XPathOfElement) {
    try {
        return driver.findElement(By.xpath(XPathOfElement)).getText();
    }
    catch (error) {
        console.log("Failed to getText: " + error)
    }
}



