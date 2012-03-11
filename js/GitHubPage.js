smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, [], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('initialize%0A%20%20%20%20super%20initialize.%0A%20%20%20%20self%20appendToJQuery%3A%20%27body%27%20asJQuery'),
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
smalltalk.send(unescape("Hi%20there%2C%20world"), "_asJQuery", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09%27Hi%20there%2C%20world%27%20asJQuery'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.GitHubPage);



