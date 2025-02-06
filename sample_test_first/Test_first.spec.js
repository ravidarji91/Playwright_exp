// example.test.js
const { test, expect } = require('@playwright/test');

test('should load the example.com page and verify the title', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.skyselect.com');
  
  // Verify that the page title is correct
  await expect(page).toHaveTitle('SkySelect');
});


//div[normalize-space()='Purchase order']

id attribute is not available for this element
name attribute is not available for this element
//div[@class='el-select__wrapper is-focused is-hovering is-filterable el-tooltip__trigger el-tooltip__trigger']//div[@class='el-select__selected-item el-select__placeholder is-transparent']


//div[contains(text(),'NET 30')]@Test
public void selectByIndex() {
    System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
    driver = new ChromeDriver();
    driver.get("https://example.com");

    // Locate the dropdown element
    WebElement dropdownElement = driver.findElement(By.id("exampleDropdown"));
    // Create a Select object
    Select dropdown = new Select(dropdownElement);
    // Select by index (e.g., index 1, which is "Option 2" in this case)
    dropdown.selectByIndex(1);

    driver.quit();
}


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;

public class SelectDropdownExample {
    WebDriver driver;

    @Test
    public void selectByVisibleText() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://example.com");

        // Locate the dropdown element
        WebElement dropdownElement = driver.findElement(By.id("exampleDropdown"));
        // Create a Select object
        Select dropdown = new Select(dropdownElement);
        // Select by visible text
        dropdown.selectByVisibleText("Option 2");

        driver.quit();
    }
}
