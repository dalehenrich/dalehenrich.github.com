smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, ['username', 'repositoryDiv'], 'GitHubPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderBodyOn_", [html]);
smalltalk.send(html, "_strong_", ["Repositories"]);
smalltalk.send(html, "_with_", [" "]);
(function($rec){smalltalk.send($rec, "_with_", ["Refresh repository list"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(div){return smalltalk.send(self, "_getRepositories", []);})]);})]);})(smalltalk.send(html, "_button", []));
(self['@repositoryDiv']=smalltalk.send(html, "_div", []));
smalltalk.send(self, "_getRepositories", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09self%20renderBodyOn%3A%20html.%0A%09html%20strong%3A%20%27Repositories%27.%0A%09html%20with%3A%20%27%20%27.%0A%20%20%20%20%20%20%20%20html%20%0A%20%20%20%20%20%20%20%20%09button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Refresh%20repository%20list%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5B%20%20repositoryDiv%20contents%3A%20%20%5B%3Adiv%20%7C%20self%20getRepositories%20%5D%20%5D.%0A%20%20%20%20%20%09repositoryDiv%20%3A%3D%20html%20div.%0A%09self%20getRepositories'),
messageSends: ["renderBodyOn:", "strong:", "with:", "onClick:", "contents:", "getRepositories", "button", "div"],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
category: 'accessing',
fn: function (){
var self=this;
return self['@username'];
return self;},
args: [],
source: unescape('username%0A%0A%09%5Eusername'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username_'),
smalltalk.method({
selector: unescape('username%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@username']=aString);
return self;},
args: ["aString"],
source: unescape('username%3A%20aString%0A%0A%09username%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_sampleRepositoryResponse'),
smalltalk.method({
selector: unescape('sampleRepositoryResponse'),
category: 'private',
fn: function (){
var self=this;
unescape("%0A%20%20%7B%0A%20%20%20%20%22git_url%22%3A%20%22git%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22ssh_url%22%3A%20%22git@github.com%3Adalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22mirror_url%22%3A%20null%2C%0A%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22has_downloads%22%3A%20true%2C%0A%20%20%20%20%22created_at%22%3A%20%222012-01-30T18%3A02%3A07Z%22%2C%0A%20%20%20%20%22has_issues%22%3A%20false%2C%0A%20%20%20%20%22master_branch%22%3A%20null%2C%0A%20%20%20%20%22description%22%3A%20%22Smalltalk%20source%20files%22%2C%0A%20%20%20%20%22forks%22%3A%200%2C%0A%20%20%20%20%22svn_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22fork%22%3A%20true%2C%0A%20%20%20%20%22has_wiki%22%3A%20true%2C%0A%20%20%20%20%22private%22%3A%20false%2C%0A%20%20%20%20%22clone_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22homepage%22%3A%20%22%22%2C%0A%20%20%20%20%22size%22%3A%20128%2C%0A%20%20%20%20%22open_issues%22%3A%200%2C%0A%20%20%20%20%22updated_at%22%3A%20%222012-03-01T16%3A36%3A38Z%22%2C%0A%20%20%20%20%22owner%22%3A%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/dalehenrich%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%225d423de04ebac0b8f9412a9a381c9460%22%2C%0A%20%20%20%20%20%20%22login%22%3A%20%22dalehenrich%22%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//secure.gravatar.com/avatar/5d423de04ebac0b8f9412a9a381c9460%3Fd%3Dhttps%3A//a248.e.akamai.net/assets.github.com%252Fimages%252Fgravatars%252Fgravatar-140.png%22%2C%0A%20%20%20%20%20%20%22id%22%3A%20623951%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22name%22%3A%20%22smallsource%22%2C%0A%20%20%20%20%22watchers%22%3A%202%2C%0A%20%20%20%20%22pushed_at%22%3A%20%222012-01-31T23%3A28%3A34Z%22%2C%0A%20%20%20%20%22id%22%3A%203307281%2C%0A%20%20%20%20%22language%22%3A%20null%0A%20%20%7D%2C%0A");
return self;},
args: [],
source: unescape('sampleRepositoryResponse%0A%0A%27%0A%20%20%7B%0A%20%20%20%20%22git_url%22%3A%20%22git%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22ssh_url%22%3A%20%22git@github.com%3Adalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22mirror_url%22%3A%20null%2C%0A%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22has_downloads%22%3A%20true%2C%0A%20%20%20%20%22created_at%22%3A%20%222012-01-30T18%3A02%3A07Z%22%2C%0A%20%20%20%20%22has_issues%22%3A%20false%2C%0A%20%20%20%20%22master_branch%22%3A%20null%2C%0A%20%20%20%20%22description%22%3A%20%22Smalltalk%20source%20files%22%2C%0A%20%20%20%20%22forks%22%3A%200%2C%0A%20%20%20%20%22svn_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource%22%2C%0A%20%20%20%20%22fork%22%3A%20true%2C%0A%20%20%20%20%22has_wiki%22%3A%20true%2C%0A%20%20%20%20%22private%22%3A%20false%2C%0A%20%20%20%20%22clone_url%22%3A%20%22https%3A//github.com/dalehenrich/smallsource.git%22%2C%0A%20%20%20%20%22homepage%22%3A%20%22%22%2C%0A%20%20%20%20%22size%22%3A%20128%2C%0A%20%20%20%20%22open_issues%22%3A%200%2C%0A%20%20%20%20%22updated_at%22%3A%20%222012-03-01T16%3A36%3A38Z%22%2C%0A%20%20%20%20%22owner%22%3A%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/dalehenrich%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%225d423de04ebac0b8f9412a9a381c9460%22%2C%0A%20%20%20%20%20%20%22login%22%3A%20%22dalehenrich%22%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//secure.gravatar.com/avatar/5d423de04ebac0b8f9412a9a381c9460%3Fd%3Dhttps%3A//a248.e.akamai.net/assets.github.com%252Fimages%252Fgravatars%252Fgravatar-140.png%22%2C%0A%20%20%20%20%20%20%22id%22%3A%20623951%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22name%22%3A%20%22smallsource%22%2C%0A%20%20%20%20%22watchers%22%3A%202%2C%0A%20%20%20%20%22pushed_at%22%3A%20%222012-01-31T23%3A28%3A34Z%22%2C%0A%20%20%20%20%22id%22%3A%203307281%2C%0A%20%20%20%20%22language%22%3A%20null%0A%20%20%7D%2C%0A%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderBodyOn_'),
smalltalk.method({
selector: unescape('renderBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["The list of repositories below is generated by making calls to the"]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//developer.github.com/")]);return smalltalk.send($rec, "_with_", [" GitHub development API"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [" from Amber Smalltalk."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["If you want to see how this is done: "]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("Browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_button", []));smalltalk.send(h, "_with_", [" and "]);(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("https%3A//github.com/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [".github.com"])]);return smalltalk.send($rec, "_with_", ["visit the github repository"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_p_", [unescape("If%20I%20were%20any%20kind%20of%20a%20web%20developer%20%28Smalltalk%20is%20my%20game%29%20this%20page%20would%20look%20a%20lot%20prettier.")]);
return self;},
args: ["html"],
source: unescape('renderBodyOn%3A%20html%0A%0A%09html%20p%20with%3A%20%5B%3Ah%20%7C%20%20%0A%09%09h%20with%3A%20%27Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27http%3A//amber-lang.net/%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber%20Smalltalk%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27.%27%5D.%0A%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%27%27re%20new%20to%20Smalltalk%2C%20take%20an%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27amber/learn.html%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber-powered%20Smaltalk%20tutorial%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27%20right%20in%20your%20own%20browser%21%27%5D.%0A%09html%20p%20with%3A%20%5B%3Ah%20%7C%0A%09%09h%20with%3A%20%27The%20list%20of%20repositories%20below%20is%20generated%20by%20making%20calls%20to%20the%27.%0A%09%09h%0A%09%09%09a%20href%3A%20%27http%3A//developer.github.com/%27%3B%0A%09%09%09with%3A%20%27%20GitHub%20development%20API%27.%0A%09%09h%20with%3A%20%27%20from%20Amber%20Smalltalk.%27%20%5D.%0A%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%20want%20to%20see%20how%20this%20is%20done%3A%20%27%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Browse%20the%20%27%2C%20self%20class%20name%2C%20%27%20class%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5B%20Browser%20openOn%3A%20self%20class%20%5D.%0A%20%20%20%20%09%09h%20%20with%3A%20%27%20and%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%09%09%09a%20href%3A%20%27https%3A//github.com/%27%2C%20self%20username%2C%20%27/%27%2C%20self%20username%2C%20%27.github.com%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27visit%20the%20github%20repository%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27.%27%5D.%0A%09html%20p%3A%20%27If%20I%20were%20any%20kind%20of%20a%20web%20developer%20%28Smalltalk%20is%20my%20game%29%20this%20page%20would%20look%20a%20lot%20prettier.%27.%0A%0A%09%0A'),
messageSends: ["with:", "p", "href:", "a", unescape("%2C"), "name", "class", "onClick:", "openOn:", "button", "username", "p:"],
referencedClasses: ["Browser"]
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositoryData_'),
smalltalk.method({
selector: unescape('renderRepositoryData%3A'),
category: 'rendering',
fn: function (repositoryData){
var self=this;
var homepage=nil;
var sortedData=nil;
(sortedData=smalltalk.send(smalltalk.send(repositoryData, "_asArray", []), "_sort_", [(function(a, b){return ((($receiver = smalltalk.send(a, "_name", [])).klass === smalltalk.Number) ? $receiver <=smalltalk.send(b, "_name", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(b, "_name", [])]));})]));
smalltalk.send(self['@repositoryDiv'], "_contents_", [(function(html){return smalltalk.send(html, "_ul_", [(function(){return smalltalk.send(sortedData, "_do_", [(function(repo){return smalltalk.send(html, "_p_", [(function(){(function($rec){smalltalk.send($rec, "_href_", [smalltalk.send(repo, "_at_", ["html_url"])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(html, "_strong_", [smalltalk.send(repo, "_name", [])]);})]);})(smalltalk.send(html, "_a", []));smalltalk.send((homepage=smalltalk.send(repo, "_homepage", [])), "_ifNotEmpty_", [(function(){smalltalk.send(html, "_with_", [unescape("%20%5B")]);(function($rec){smalltalk.send($rec, "_href_", [homepage]);return smalltalk.send($rec, "_with_", [homepage]);})(smalltalk.send(html, "_a", []));return smalltalk.send(html, "_with_", [unescape("%5D")]);})]);return (function($rec){smalltalk.send($rec, "_with_", [unescape("%20-%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(repo, "_description", [])]);})(html);})]);})]);})]);})]);
return self;},
args: ["repositoryData"],
source: unescape('renderRepositoryData%3A%20repositoryData%0A%0A%09%7C%20homepage%20sortedData%20%7C%0A%09sortedData%20%3A%3D%20repositoryData%20asArray%20sort%3A%20%5B%3Aa%20%3Ab%20%7C%20a%20name%20%3C%3D%20b%20name%20%5D.%0A%09repositoryDiv%20contents%3A%20%5B%3A%20html%20%7C%0A%09%09html%20ul%3A%20%5B%0A%09%09%09sortedData%20do%3A%20%5B%3Arepo%20%7C%20%0A%09%09%09%09html%20p%3A%20%5B%0A%09%09%09%09%09html%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%09%20%20%20%20%09%09a%20href%3A%20%28repo%20at%3A%20%27html_url%27%29%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%20%20%20%20%20%20%20%20%09%09with%3A%20%5B%20html%20%20strong%3A%20repo%20name%20%5D.%0A%09%09%09%09%09%28homepage%20%3A%3D%20repo%20homepage%29%0A%09%09%09%09%09%09ifNotEmpty%3A%20%5B%0A%09%09%09%09%09%09%09html%20with%3A%20%27%20%5B%27.%0A%09%09%09%09%09%09%09html%0A%09%09%09%09%09%09%09%09a%20href%3A%20homepage%3B%0A%09%09%09%09%09%09%09%09with%3A%20homepage.%0A%09%09%09%09%09%09%09html%20with%3A%20%27%5D%27%5D.%0A%09%09%09%09%09html%0A%09%09%09%09%09%09with%3A%20%27%20-%20%27%3B%0A%09%09%09%09%09%09with%3A%20repo%20description%5D%5D%5D%5D'),
messageSends: ["sort:", "asArray", unescape("%3C%3D"), "name", "contents:", "ul:", "do:", "p:", "href:", "at:", "with:", "strong:", "a", "ifNotEmpty:", "homepage", "description"],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositoryError_'),
smalltalk.method({
selector: unescape('renderRepositoryError%3A'),
category: 'rendering',
fn: function (aString){
var self=this;
smalltalk.send(self['@repositoryDiv'], "_with_", [aString]);
return self;},
args: ["aString"],
source: unescape('renderRepositoryError%3A%20aString%0A%09%22append%20not%20replace%22%0A%0A%09repositoryDiv%20with%3A%20aString'),
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_getRepositories'),
smalltalk.method({
selector: unescape('getRepositories'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("https%3A//api.github.com/users/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/repos")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self, "_renderRepositoryData_", [smalltalk.send(repositoryData, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(jqXHR, status, error){return smalltalk.send(self, "_renderRepositoryError_", [smalltalk.send(status, "_printString", [])]);})])])]);
return self;},
args: [],
source: unescape('getRepositories%0A%0A%09jQuery%20%0A%09%09ajax%3A%20%27https%3A//api.github.com/users/%27%2C%20self%20username%2C%20%27/repos%27%0A%09%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%3ArepositoryData%20%3Astatus%20%3AjqXHR%20%7C%20%0A%09%09%09%09self%20renderRepositoryData%3A%20repositoryData%20data%20%5D.%0A%20%20%20%20%20%09%09%09%27error%27%20-%3E%5B%3AjqXHR%20%3Astatus%20%3Aerror%20%7C%20%0A%09%09%09%09self%20renderRepositoryError%3A%20status%20printString%20%20%5D%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), "username", unescape("-%3E"), "renderRepositoryData:", "data", "renderRepositoryError:", "printString"],
referencedClasses: []
}),
smalltalk.GitHubPage);


smalltalk.addMethod(
unescape('_openOn_'),
smalltalk.method({
selector: unescape('openOn%3A'),
category: 'instance creation',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_username_", [aString]);return smalltalk.send($rec, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape('openOn%3A%20aString%0A%0A%09%28self%20new%29%0A%09%09username%3A%20aString%3B%0A%20%20%20%20%20%20%20%20%20%20%09appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["username:", "appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.GitHubPage.klass);


