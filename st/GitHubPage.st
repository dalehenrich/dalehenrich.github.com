Smalltalk current createPackage: 'GitHubPage' properties: #{}!
Widget subclass: #GitHubPage
	instanceVariableNames: ''
	category: 'GitHubPage'!

!GitHubPage methodsFor: 'initialization'!

initialize
    super initialize.
    self appendToJQuery: 'body' asJQuery
! !

!GitHubPage methodsFor: 'rendering'!

renderOn: html

	'Hi there, world' asJQuery
! !

