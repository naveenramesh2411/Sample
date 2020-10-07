const moment= require('moment') 
const fs = require('fs');
const path = require('path')



class utility
{
    

    moveToElement(locator)
    {
        locator.waitForDisplayed();
        locator.moveTo().click();
    }

    clickElement(locator)
    {
        locator.waitForEnabled(5000)
        
        locator.click();
    }

    provideInputVlauewithLocator(locator, value)
    {
        locator.setValue(value)
        browser.pause(2000)        
    }

    
    waitUntilBrowser(waitElement)
    {
        waitElement.waitUntil(function(){
            return waitElement.isDisplayed()},
            {   timeout: 15000, 
                timeoutMsg:'Agent not available..'
        });
        console.log("Waiting for agent")
    }

    logMessage(message) {
        process.emit('test:log', message);
    }

    takeScreenshot(message) {
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        //fs.ensureDirSync('reports/html-reports/screenshots/');
        //fs.readFileSync('reports/html-reports/screenshots/');\
        var dirname = 'reports/html-reports/screenshots/';
        fs.existsSync(dirname);
        
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        this.browser.saveScreenshot(filepath);
        this.logMessage(message) ;
        process.emit('test:screenshot', filepath);
        return this;
    }

    logMessageOnReport(message){
        console.log(message)
        process.emit('test:log', message);
    }
    
    TrigentClick(webElement)
    {
        try
        {
            webElement.waitForExist(10000);
            webElement.click();
        }
        catch
        {
            console.log("WebElement does not exist within time limit of 10 seconds...",webElement)
        }
       
    }

}
module.exports = new utility();