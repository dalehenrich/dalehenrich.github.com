smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, [], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send(self, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(unescape("Hi%20there%2C%20world"), "_asJQuery", []);
return self;}
}),
smalltalk.GitHubPage);



