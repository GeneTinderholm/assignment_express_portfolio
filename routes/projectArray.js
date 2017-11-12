class Project {

	constructor(name, techUsed, ghRepo, desc){
		this.name = name;
		this.techUsed = techUsed;
		this.ghRepo = ghRepo;
		this.desc = desc;
	}
}

let htmlResume = new Project('assignment_html_resume', ['html'],'https://github.com/GeneTinderholm/assignment_html_resume', 'My resume represented in plain HTML, ready for styling!');

let cssGarden = new Project('assignment_viking_css_garden', ['css'], 'https://github.com/GeneTinderholm/assignment_viking_css_garden', 'My introduction to CSS, a standardized HTML file with nearly infinite ways to customize it. I tried to go for an old newspaper feeling.');

let markupWarmup = new Project('assignment_markup_warmup', ['html', 'css'], 'https://github.com/GeneTinderholm/assignment_markup_warmup', 'Creating a styled blog site (specifications provided to me).');

let prepFacebookPages = new Project('project_prep_facebook_pages', ['html', 'css', 'sass'], 'https://github.com/GeneTinderholm/project_prep_facebook_pages', 'Cloning several of the iconic pages from facebook. Later the CSS stylesheets were converted into SASS stylesheets.');

let bootstrapSprint = new Project('assignment_bootstrap_sprint', ['html', 'css', 'sass', 'bootstrap'], 'https://github.com/GeneTinderholm/assignment_bootstrap_sprint', 'My introduction to twitter bootstrap. A clone of one of their test pages.');

let jsSprint = new Project('assignment_js_sprint', ['html', 'javascript'], 'https://github.com/GeneTinderholm/assignment_js_sprint', 'My introduction to javascript. Several built in utilities have been re-implemented in my own code, with a bonus roulette mini-game.');

let jqDomSprint = new Project('assignment_jq_dom_sprint', ['html', 'javascript', 'jquery'], 'https://github.com/GeneTinderholm/assignment_jq_dom_sprint', 'My introduction to jQuery. Modifications done to a previously constructed page.');

let jqEeSprint = new Project('assignment_jq_ee_sprint', ['html', 'javascript', 'jquery'], 'https://github.com/GeneTinderholm/assignment_jq_ee_sprint', 'Several native utilities re-implemented in my own code, including a photo-tagging utility.');

let royaltyFreeMusicPlayer = new Project('assignment_royalty_free_music_player', ['html', 'css', 'javascript', 'jquery'], 'https://github.com/GeneTinderholm/assignment_royalty_free_music_player', 'A web-app to play music (music used here is all royalty free).');

let nodeHelloWorld = new Project('assignment_node_hello_world', ['javascript', 'node'], 'https://github.com/GeneTinderholm/assignment_node_hello_world', 'My introduction to Node. A list of events is logged and output is modified by event severity.');

let asyncNodejs = new Project('assignment_async_nodejs', ['javascript', 'node', 'asynchronous javascript'], 'https://github.com/GeneTinderholm/assignment_async_nodejs', 'My introduction to asynchronous javascript. Parts of the Node "events" package re implemented.');

let buildANodejsServer = new Project('assignment_build_a_nodejs_server', ['html', 'javascript', 'node', 'http'], 'https://github.com/GeneTinderholm/assignment_build_a_nodejs_server', 'My introduction to HTTP within Node. Page displays information pulled from the request and server response.');

let projectArray = [buildANodejsServer, asyncNodejs, nodeHelloWorld, royaltyFreeMusicPlayer, jqEeSprint, jqDomSprint, jsSprint, bootstrapSprint, prepFacebookPages, markupWarmup, cssGarden, htmlResume];


module.exports = {
	Project,
	projectArray
}
