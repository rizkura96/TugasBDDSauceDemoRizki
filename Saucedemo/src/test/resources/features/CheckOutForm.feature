@CheckoutForm
Feature: Input Checkout Form flow
  As a user I want to filled checkout form to click button checkout

  Scenario Outline: User Invalid input first name, last name, and partial code in checkout form
    Given User open the website sauce demo
    When User input "standard_user" as userName and Input "secret_sauce" as password
    Then User already on landing page
    And User sort product list by "Name (Z to A)"
    And User choice 2 product from the list "<produk1>" and "<produk2>"
    And User click on icon cart to verify product
    Then User delete product Test.allTheThings
    And User click button checkout
    Then User input Check Out Form in Firs Name "<firstName>", Last Name "<lastName>" and Partial Code "<portalCode>".
    And User see error massage "<errorMassageCheckoutForm>"

    Examples:
      | firstName | lastName  | portalCode | errorMassageCheckoutForm       |
      |           |           |            | Error: First Name is required  |
      | rizki     |           |            | Error: Last Name is required   |
      | rizki     | kurniawan |            | Error: Postal Code is required |
      |           | kurniawan |            | Error: First Name is required  |
      |           | kurniawan | 12345      | Error: First Name is required  |
      | rizki     |           | 12345      | Error: Last Name is required   |


  Scenario: User input first name, last name, and partial code in checkout form
    Given User open the website sauce demo
    When User input "standard_user" as userName and Input "secret_sauce" as password
    And User sort product list by "Name (Z to A)"
    And User choice 2 product from the list
    And User click on icon cart to verify product
    Then User delete product Test.allTheThings
    And User click button checkout
    Then User input Check Out Form in Firs Name "rizki", Last Name "kurniawan" and Partial Code "123".