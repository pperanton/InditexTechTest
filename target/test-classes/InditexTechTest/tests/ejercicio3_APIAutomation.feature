Feature: API Test
    I want to use this template for my feature file
  
  Background:
    #* url 'http://petstore.swagger.io/v2'
    * header Accept = 'application/json'
    * header api_key = 'special-key'

  Scenario: Title of your scenario
    Given url 'http://petstore.swagger.io/v2/user'
    When method POST
    Then status 200
    And print response
    And url '/user/{username}'
    When method GET
    Then status 200
    And print response

  Scenario: Title of your scenario 2
    Given url 'http://petstore.swagger.io/v2/pet/findByStatus?status=sold'
    When method GET
    Then status 200
    And print response


    