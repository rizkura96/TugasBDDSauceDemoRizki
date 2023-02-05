$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Complete.feature");
formatter.feature({
  "line": 3,
  "name": "Completed order",
  "description": "As a user I want to completed buy product",
  "id": "completed-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Complete"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "user completed order product",
  "description": "",
  "id": "completed-order;user-completed-order-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and Input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choice 2 product from the list \"\u003cproduk1\u003e\" and \"\u003cproduk2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on icon cart to verify product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User delete product \"\u003cdeleteProduct\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input Check Out Form in Firs Name \"Rizki\", Last Name \"Kurniawan\" and Partial Code \"999\".",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verify nominal taxt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Summary total Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User complete order",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "completed-order;user-completed-order-product;",
  "rows": [
    {
      "cells": [
        "produk1",
        "produk2",
        "deleteProduct"
      ],
      "line": 22,
      "id": "completed-order;user-completed-order-product;;1"
    },
    {
      "cells": [
        "Sauce Labs Onesie",
        "Test.allTheThings() T-Shirt (Red)",
        "Sauce Labs Onesie"
      ],
      "line": 23,
      "id": "completed-order;user-completed-order-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14215678800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user completed order product",
  "description": "",
  "id": "completed-order;user-completed-order-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Complete"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and Input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User choice 2 product from the list \"Sauce Labs Onesie\" and \"Test.allTheThings() T-Shirt (Red)\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on icon cart to verify product",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User delete product \"Sauce Labs Onesie\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button checkout",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input Check Out Form in Firs Name \"Rizki\", Last Name \"Kurniawan\" and Partial Code \"999\".",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User verify nominal taxt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User verify Summary total Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click button finish",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User complete order",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 687619100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1777655200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 104003300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseSteps.sortProductValue(String)"
});
formatter.result({
  "duration": 1385451600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceBasket()"
});
formatter.result({
  "duration": 1231363600,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStep.clickIconsCart()"
});
formatter.result({
  "duration": 1244832100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 21
    }
  ],
  "location": "CheckoutStep.deleteProduct(String)"
});
formatter.result({
  "duration": 1128165700,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutStep.clickOnCheckOut()"
});
formatter.result({
  "duration": 1119168900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rizki",
      "offset": 40
    },
    {
      "val": "Kurniawan",
      "offset": 59
    },
    {
      "val": "999",
      "offset": 88
    }
  ],
  "location": "CheckOutFromStep.inputCheckOutForm(String,String,String)"
});
formatter.result({
  "duration": 2854016300,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyNominalTax()"
});
formatter.result({
  "duration": 139280500,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyNominalTotal()"
});
formatter.result({
  "duration": 155901700,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.clickOnBtnFinish()"
});
formatter.result({
  "duration": 5217229800,
  "status": "passed"
});
formatter.match({
  "location": "CompleteStep.verifyOnCheckOutCompletePage()"
});
formatter.result({
  "duration": 1005474500,
  "status": "passed"
});
formatter.after({
  "duration": 909461000,
  "status": "passed"
});
});