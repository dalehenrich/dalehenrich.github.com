smalltalk.addPackage('GitHubPage', {});
smalltalk.addClass('GitHubPage', smalltalk.Widget, [], 'GitHubPage');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
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
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("http%3A//amber-lang.net/")]);return smalltalk.send($rec, "_with_", ["Amber Smalltalk"]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%27re%20new%20to%20Smalltalk%2C%20take%20an%20")]);(function($rec){smalltalk.send($rec, "_href_", [unescape("amber/learn.html")]);return smalltalk.send($rec, "_with_", [unescape("Amber-powered%20Smaltalk%20tutorial")]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", [unescape("%20right%20in%20your%20own%20browser%21")]);})]);
smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [(function(h){smalltalk.send(h, "_with_", [unescape("If%20you%20want%20to%20see%20how%20this%20is%20done%2C%20")]);(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send("browse the ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]), "__comma", [" class"])]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send((smalltalk.Browser || Browser), "_openOn_", [smalltalk.send(self, "_class", [])]);})]);})(smalltalk.send(h, "_a", []));return smalltalk.send(h, "_with_", ["."]);})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20p%20with%3A%20%5B%3Ah%20%7C%20%0A%09%09h%20with%3A%20%27Hi%20there%2C%20world.%20This%20page%20is%20powered%20by%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27http%3A//amber-lang.net/%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber%20Smalltalk%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27.%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%27%27re%20new%20to%20Smalltalk%2C%20take%20an%20%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20href%3A%20%27amber/learn.html%27%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27Amber-powered%20Smaltalk%20tutorial%27.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27%20right%20in%20your%20own%20browser%21%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20html%20p%20with%3A%20%5B%3Ah%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%20with%3A%20%27If%20you%20want%20to%20see%20how%20this%20is%20done%2C%20%27%20.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20h%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%3A%20%27browse%20the%20%27%2C%20self%20class%20name%2C%20%27%20class%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onClick%3A%20%5B%20Browser%20openOn%3A%20self%20class%20%5D.%0A%20%20%20%20%09%09h%20with%3A%20%27.%27%5D%0A'),
messageSends: ["with:", "p", "href:", "a", unescape("%2C"), "name", "class", "onClick:", "openOn:"],
referencedClasses: ["Browser"]
}),
smalltalk.GitHubPage);



