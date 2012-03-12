Smalltalk current createPackage: 'GitHubPage' properties: #{}!
Widget subclass: #GitHubPage
	instanceVariableNames: 'username'
	category: 'GitHubPage'!

!GitHubPage methodsFor: 'accessing'!

username

	^username
!

username: aString

	username := aString
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
	html strong: 'Repositories'.
	jQuery 
		ajax: 'https://api.github.com/users/', self username, '/repos'
		options: #{	
			'type' -> 'GET'.
			'success' -> [:repositoryData :status :jqXHR | self renderRepositories: repositoryData On: html  ].
     			'error' ->[html p: 'none found' ]}
!

renderRepositories: repositoryData On: html

	html ul: [
		repositoryData do: [:repo | 
			html p: [
				html 
					strong: repo name;
					with: ' - ';
					with: repo description ]]]
! !

!GitHubPage class methodsFor: 'instance creation'!

openOn: aString

	(self new)
		username: aString;
          	appendToJQuery: 'body' asJQuery
! !

