smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, [], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
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
var repo=nil;
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", ["If you want to see how this is done: "]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("Browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_button", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(html, "_p_", [unescape("Here%27s%20a%20walkback%20to%20prove%20it%27s%20Smalltalk")]);
smalltalk.send(html, "_strong_", ["Repositories"]);
(repo=smalltalk.send(smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [unescape("https%3A//api.github.com/user/repos"), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"])])]), "_at_", [(1)]));
(function($rec){smalltalk.send($rec, "_p_", [smalltalk.send(repo, "_name", [])]);return smalltalk.send($rec, "_br", []);})(html);
return self;}
}),
smalltalk.GitHubPage);



