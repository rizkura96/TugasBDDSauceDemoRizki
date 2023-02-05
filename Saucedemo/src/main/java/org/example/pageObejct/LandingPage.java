package org.example.pageObejct;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class LandingPage {
    public static WebDriver driver;

    public LandingPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }


    @FindBy(xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    private WebElement chart1;
    public void clickBasket1(){
        chart1.click();
    }


    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    private WebElement chart2;
    public void clickBasket2(){
        chart2.click();
    }


    @FindBy(xpath ="//span[@class='title']")
    private WebElement vrfyLandingPage;
    public boolean verifyLandingPage(){
        vrfyLandingPage.isDisplayed();
        return true;
    }


    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement selectContainer;
    public void sortProduct(String sort){
        Select a = new Select(selectContainer);
        a.selectByVisibleText(sort);
    }
}
