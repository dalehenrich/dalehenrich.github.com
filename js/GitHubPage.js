smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, ['username'], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@username']="dalehenrich");
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20%09super%20initialize.%0A%09username%20%3A%3D%20%27dalehenrich%27.%0A%20%20%20%20%09self%20appendToJQuery%3A%20%27body%27%20asJQuery'),
messageSends: ["initialize", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["If you want to see how this is done: "]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("Browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_button", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_strong_", ["Repositories"]);
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("https%3A//api.github.com/users/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/repos")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self, "_renderRepositories_On_", [repositoryData, html]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send(html, "_p_", ["none found"]);})])])]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20p%20with%3A%20%5B%3Ah%20%7C%20%20%0A%09%09h%20with%3A%20%27Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27http%3A//amber-lang.net/%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber%20Smalltalk%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27.%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%27%27re%20new%20to%20Smalltalk%2C%20take%20an%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27amber/learn.html%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber-powered%20Smaltalk%20tutorial%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27%20right%20in%20your%20own%20browser%21%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%20want%20to%20see%20how%20this%20is%20done%3A%20%27%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Browse%20the%20%27%2C%20self%20class%20name%2C%20%27%20class%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5B%20Browser%20openOn%3A%20self%20class%20%5D.%0A%20%20%20%20%09%09h%20with%3A%20%27.%27%5D.%0A%09html%20strong%3A%20%27Repositories%27.%0A%09jQuery%20%0A%09%09ajax%3A%20%27https%3A//api.github.com/users/%27%2C%20self%20username%2C%20%27/repos%27%0A%09%09options%3A%20%23%7B%09%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%27success%27%20-%3E%20%5B%3ArepositoryData%20%3Astatus%20%3AjqXHR%20%7C%20self%20renderRepositories%3A%20repositoryData%20On%3A%20html%20%20%5D.%0A%20%20%20%20%20%09%09%09%27error%27%20-%3E%5Bhtml%20p%3A%20%27none%20found%27%20%5D%7D%0A%09%0A'),
messageSends: ["with:", "p", "href:", "a", unescape("%2C"), "name", "class", "onClick:", "openOn:", "button", "strong:", "ajax:options:", "username", unescape("-%3E"), "renderRepositories:On:", "p:"],
referencedClasses: ["Browser"]
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositories_On_'),
smalltalk.method({
selector: unescape('renderRepositories%3AOn%3A'),
category: 'rendering',
fn: function (repositoryData, html){
var self=this;
smalltalk.send(html, "_ul_", [(function(){return smalltalk.send(repositoryData, "_do_", [(function(repo){return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_strong_", [smalltalk.send(repo, "_name", [])]);smalltalk.send($rec, "_with_", [unescape("%20-%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(repo, "_description", [])]);})(html);})]);})]);})]);
return self;},
args: ["repositoryData", "html"],
source: unescape('renderRepositories%3A%20repositoryData%20On%3A%20html%0A%0A%09html%20ul%3A%20%5B%0A%09%09repositoryData%20do%3A%20%5B%3Arepo%20%7C%20%0A%09%09%09html%20p%3A%20%5B%0A%09%09%09%09html%20%0A%09%09%09%09%09strong%3A%20repo%20name%3B%0A%09%09%09%09%09with%3A%20%27%20-%20%27%3B%0A%09%09%09%09%09with%3A%20repo%20description%20%5D%5D%5D'),
messageSends: ["ul:", "do:", "p:", "strong:", "name", "with:", "description"],
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



