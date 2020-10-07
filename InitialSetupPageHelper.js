const tdata = require("../Pages/TestData");
const testSetupPage =require("../Pages/InitialLoginPageHelper");
class setupPage
{
    setupPageURL = tdata.SetupPageURL;
    CSR_Console= tdata.CSR_ConsoleURL;
    get searchBox() {return $("//input[@placeholder ='Search Setup']") }
    //get actualUser() {return $("(//table[@class='slds-table slds-table_cell-buffer slds-table_bordered uiVirtualDataGrid--default uiVirtualDataGrid'])[1]/tbody/tr/td[1]/a")}
    get user() {return $("div.slds-truncate span")}
    //get login_frame() {return $('//iframe[contains(@title,"User: Brenda Robles") or starts-with(@name,"vfFrameId")]')};
    get login_frame() {return $('iframe[contains(@name,"vfFrameId")]')};
    
    get UserLoginBtn() {return $("#topButtonRow > input:nth-child(4)") }
    get login_frame() {return $("div.content.iframe-parent > iframe:nth-child(1)")}


    enterSearchBoxValue(value)
    {
        //this.searchBox.waitForDisplayed({timeout:3000});
        this.searchBox.click(); //Click on Search box
        browser.pause(2000);
        this.searchBox.setValue(value); // Enter value in Searchbox
        browser.pause(5000);
        //this.user.waitForExist(8000);
        this.user.click(); // Click User
        //this.searchBox.keys('Enter');
        console.log("Enter key is pressed")

        browser.pause(5000); 

        browser.switchToFrame($('//iframe[contains(@name,"vfFrameId")]'));
        //browser.switchToFrame($("#setupComponent > div.setupcontent > div > force-aloha-page > div > iframe"));
        console.log("Switched to Setup page user login frame");

        browser.pause(5000);
    
       //console.log($('//*[@id="topButtonRow"]/input[4]').getText());
       //browser.pause(5000);
        $('//*[@id="topButtonRow"]/input[4]').click();
        console.log("User Login button clicked..");
        browser.pause(8000);
        browser.switchToParentFrame();
        //browser.pause(5000);
        console.log("###",browser.getUrl());

        //testSetupPage.CSR_Console.waitForExist(4000);
        browser.pause(5000);
        //console.log("CSR logged in ", testSetupPage.CSR_Console.getText())

    }

}

module.exports = new setupPage();