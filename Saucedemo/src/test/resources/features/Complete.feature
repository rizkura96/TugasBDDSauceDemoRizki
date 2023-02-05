@Complete

  Feature: Completed order
    As a user I want to completed buy product

    Scenario Outline: user completed order product
      Given User open the website sauce demo
      When User input "standard_user" as userName and Input "secret_sauce" as password
      Then User already on landing page
      And User sort product list by "Name (Z to A)"
      And User choice 2 product from the list "<produk1>" and "<produk2>"
      And User click on icon cart to verify product
      Then User delete product "<deleteProduct>"
      And User click button checkout
      Then User input Check Out Form in Firs Name "Rizki", Last Name "Kurniawan" and Partial Code "999".
      And User verify nominal taxt
      And User verify Summary total Checkout
      And User click button finish
      And User complete order

      Examples:
        | produk1           | produk2                           | deleteProduct     |
        | Sauce Labs Onesie | Test.allTheThings() T-Shirt (Red) | Sauce Labs Onesie |