Feature: Login test
This is login test

Background:
	* configure driver = { type: 'chrome', addOptions: ["--remote-allow-origins=*"] }

  Scenario: Login with valid login credentials  
    Given driver 'https://www.google.com/'
    And waitFor("#L2AGLb")
    And click("#L2AGLb")
    When input('input[name=q]', 'automatización')
		And input('input[name=q]', Key.ENTER)
		And click('{^}Wikipedia')
		Then match driver.url == 'https://es.wikipedia.org/wiki/Automatizaci%C3%B3n'
		And scroll('{a}Ctesibius')
		And screenshot()
		#And waitFor("{^div}270")