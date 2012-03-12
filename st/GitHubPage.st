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

	html p with: [:h |  
		h with: 'Hi there, world. This page is powered by '.
                h 
                        a href: 'http://amber-lang.net/'; 
                        with: 'Amber Smalltalk'.
                 h with: '.'].
            html p with: [:h | 
                  h with: 'If you''re new to Smalltalk, take an '.
                  h
                        a href: 'amber/learn.html'; 
                        with: 'Amber-powered Smaltalk tutorial'.
                 h with: ' right in your own browser!!'].
             html p with: [:h |
                 h with: 'If you want to see how this is done: ' .
                 h
                        button
                                with: 'Browse the ', self class name, ' class';
                                onClick: [ Browser openOn: self class ].
    		h with: '.'].
        html p: 'Under Construction'.
	html strong: 'Repositories'.
	jQuery 
		ajax: 'https://api.github.com/user/repos'
		options: #{	
			'type' -> 'GET'.
			'success' -> [ html p: 'fake repository' ].
     			'error' ->[html p: 'none found' ]}
! !

