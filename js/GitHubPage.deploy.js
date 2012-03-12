smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, ['username'], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(self['@username']="dalehenrich");
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
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["If you want to see how this is done: "]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("Browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_button", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_strong_", ["Repositories"]);
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(unescape("https%3A//api.github.com/users/"), "__comma", [smalltalk.send(self, "_username", [])]), "__comma", [unescape("/repos")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(repositoryData, status, jqXHR){return smalltalk.send(self, "_renderRepositories_On_", [repositoryData, html]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send(html, "_p_", ["none found"]);})])])]);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_renderRepositories_On_'),
smalltalk.method({
selector: unescape('renderRepositories%3AOn%3A'),
fn: function (repositoryData, html){
var self=this;
smalltalk.send(html, "_ul_", [(function(){return smalltalk.send(repositoryData, "_do_", [(function(repo){return smalltalk.send(html, "_p_", [(function(){return (function($rec){smalltalk.send($rec, "_strong_", [smalltalk.send(repo, "_name", [])]);smalltalk.send($rec, "_with_", [unescape("%20-%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(repo, "_description", [])]);})(html);})]);})]);})]);
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username'),
smalltalk.method({
selector: unescape('username'),
fn: function (){
var self=this;
return self['@username'];
return self;}
}),
smalltalk.GitHubPage);

smalltalk.addMethod(
unescape('_username_'),
smalltalk.method({
selector: unescape('username%3A'),
fn: function (aString){
var self=this;
(self['@username']=aString);
return self;}
}),
smalltalk.GitHubPage);



