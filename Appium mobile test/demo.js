describe('I want to launch the app in emulator', () => {
    it('verify the launching the app in emulator', async() => {
        

        await $('//*[@text="Afghanistan"]').click()
        await driver.pause(2000);
        //await $('//*[@text="Afghanistan"]').click()

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Afghanistan"))').click()
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Afghanistan"))').click()
    await $('//*[@text="Enter name here"]').setValue('ranjith')
    await driver.pause(2000);
    await $('//*[@text = "Male"]').click()
    await $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click()

    await driver.pause(2000);

     await $('//*[@text="ADD TO CART"]').click()

     await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()

     await $('//*[@text="Send me e-mails on discounts related to selected products in future"]').click()
     await $('//*[@text="Visit to the website to complete purchase"]').click()
     await driver.pause(9000);
    
      await driver.switchContext("WEBVIEW_com.androidsample.generalstore")
    //  await driver.getContexts()
    await $('//*[@name="q"]').addValue("Nineleaps")
    await driver.pause(7000);
    await driver.switchContext("NATIVE_APP")
    await driver.back()
    await driver.pause(7000);

    
    });
});