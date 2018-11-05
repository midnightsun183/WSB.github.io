( function( $ ){

	var randFuckingArray = '',
		fuckingDescription = '';
  
  var action = [
  'Buy',
  'Sell',
  'Write',
  ];
  
  var strategy = [
    'Albatross Spread',
    'Bear Butterfly Spread',
    'Bear Call Spread',
    'Bear Put Ladder Spread',
    'Bear Put Spread',
    'Bear Ratio Spread',
    'Box Spread',
    'Bull Butterfly Spread',
    'Bull Call Ladder Spread',
    'Bull Call Spread',
    'Bull Condor Spread',
    'Bull Put Spread',
    'Bull Ratio Spread',
    'Butterfly Spread',
    'Naked Call Options',
    'Nkaed Put Options',
    'Calendar Call Spread',
    'Calendar Put Spread',
    'Calendar Straddle',
    'Calendar Strangle',
    'Call Ratio Backspread',
    'Call Ratio Spread',
    'Condor Spread',
    'Covered Call Collar',
    'Covered Call',
    'Covered Put',
    'Iron Albatross Spread',
    'Iron Butterfly Spread',
    'Iron Condor Spread',
    'Long Call',
    'Long Put',
    'Long Straddle',
    'Long Strangle',
    'Put Ratio Backspread',
    'Put Ratio Spread',
    'Reverse Iron Albatross Spread',
    'Reverse Iron Butterfly Spread',
    'Reverse Iron Condor Spread',
    'Short Albatross Spread',
    'Short Bear Ratio Spread',
    'Short Bull Ratio Spread',
    'Short Butterfly Spread',
    'Short Calendar Call Spread',
    'Short Calendar Put Spread',
    'Short Call',
    'Short Condor Spread',
    'Short Gut',
    'Short Put',
    'Short Straddle',
    'Short Strangle',
    'Strap Straddle',
    'Strap Strangle',
    'Strip Straddle',
    'Strip Strangle',
    'Synthetic Covered Call',
    'Short Straddle',
    'Straddle',
  ];
  

	var cussing = [
		'Ass',
		'Bitch',
		'Butt',
		'Cock',
		'Cum',
		'Cunt',
		'Dick',
		'Douche',
		'Fart',
		'Fuck',
		'Jizz',
		'Schlong',
		'Shit',
		'Slut',
		'Snatch',
		'Tit',
		'Twat',
		'Wang',
		'Wank',
		'Whore',
    'Aspie',
    'Faggy',
	];

	var fuckAssNoun = [
		'Bagel',
		'Biscuit',
		'Blister',
		'Burger',
		'Bubble',
		'Bucket',
		'Camel',
		'Canoe',
		'Cocktail',
		'Cracker',
		'Cranker',
		'Dragon',
		'Dumpster',
		'Farmer',
		'Fister',
		'Guzzler',
		'Hatchet',
		'Monkey',
		'Muffin',
		'Muncher',
		'Nozzle',
		'Nugget',
		'Panda',
		'Pilot',
		'Pistol',
		'Pusher',
		'Sandwich',
		'Scratcher',
		'Scrubber',
		'Shitter',
		'Sucker',
		'Taco',
		'Twiddler',
		'Waffle',
		'Wanker',
		'Whistle',
	];

	var fuckingDescriptions = [
		"That <span class='ass'></span> just cut me off!",
		"My boss is a major <span class='ass'></span>!",
		"Don't tell her I said this, but that dude she's with is a real <span class='ass'></span>!",
		"Quit being such <span class='aan'></span> <span class='ass'></span>!",
		"The only people who would vote for that guy are total <span class='ass'></span>s!",
		"What are you, some kind of <span class='ass'></span>?",
		"Dude's a real <span class='ass'></span>, you know what I mean?",
		"He's got an ego like <span class='aan'></span> <span class='ass'></span>!",
		"She was being a real <span class='ass'></span> at the store today!",
		"That <span class='ass'></span> developer's code refuses to compile!",
		"Her kids are total <span class='ass'></span>s!",
		"Whoever wrote this API documentation is a complete <span class='ass'></span>!",
		"That guy has the personality of <span class='aan'></span> <span class='ass'></span>!",
		"I'm pretty sure I was a total <span class='ass'></span> at the bar last night.",
		"What kind of <span class='ass'></span> buys pre-ground coffee?",
		"I'd rather get <span class='aan'></span> <span class='ass'></span> to the eye than sit through this lecture.",
		"Wow, that <span class='ass'></span> just went off the deep end.",
		"I may be a jerk, but at least I'm not like that <span class='ass'></span> over there.",
		"I need that like I need <span class='aan'></span> <span class='ass'></span> on my elbow.",
		"What kind of <span class='ass'></span> slows down to merge on the highway?",
		"You've got a face like <span class='aan'></span> <span class='ass'></span>.",
		"Nothing personal, but you're a real <span class='ass'></span>.",
		"What a bunch of <span class='ass'></span>s.",
		"That <span class='ass'></span> is legally dead in 27 states - plus Guam.",
	];

	function randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions, action, strategy ) {
		// Randomizing shit bitches and returning the shit
		var randCussing = cussing[ Math.floor( Math.random()*cussing.length ) ];
		var randFuckAssNoun = fuckAssNoun[ Math.floor(Math.random()*fuckAssNoun.length ) ];
    var randAction = action[ Math.floor( Math.random()*action.length ) ];
    var randStrategy = strategy[ Math.floor( Math.random()*strategy.length ) ];
		var randFuckingDescription = fuckingDescriptions[ Math.floor( Math.random()*fuckingDescriptions.length ) ];

		return [ randCussing, randFuckAssNoun, randFuckingDescription, randStrategy, randAction ];
	}

	function randThatShitUp() {
		var $fuckingTarget = $( '.fucking.description .sentence' );
		randFuckingArray = randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions, fuckingStrategy, fuckingAction );
		fuckingDescription = randFuckingArray[2];

		// Swapping out the title bitches
		$( '.insult h1.ass' ).html( randFuckingArray[4] + ' ' + randFuckingArray[3] ' ' + randFuckingArray[0]  ' ' + randFuckingArray[1]);

		// Swapping out the descriptions bitches
		$fuckingTarget.html( randFuckingArray[2] );
		$fuckingTarget.find( 'span.ass' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );

		// Fucking a or an
		$fuckingTarget.find( 'span.aan' ).html( fuckingAorAn( randFuckingArray[0] ) );
	}

	function fuckingAorAn( shitWord ) {
		// Fucking simple right now since there's only one 'A' word.
		return 'a' === shitWord.toLowerCase().charAt(0) ? 'an' : 'a';
	}

	// On click bitches
	$( 'button.damn' ).on( 'click', randThatShitUp );

	// On load bitches
	randThatShitUp();

	$( 'a.twitter-share-button' ).on( 'click', function( e ) {

		var fuckingUrl = $( this ).attr( 'href' );
		var fuckingSpit = fuckingUrl.split( 'text=' );
		var fuckingDescriptionAgain = fuckingDescription.replace( '<span class=\'ass\'></span>', randFuckingArray[0] + ' ' + randFuckingArray[1] );
		fuckingDescriptionAgain = fuckingDescriptionAgain.replace( '<span class=\'aan\'></span>', fuckingAorAn( randFuckingArray[0] ) );
		var newFuckingUrl = fuckingSpit[0] + 'text=' + randFuckingArray[0] + ' ' + randFuckingArray[1] + ' (noun) "' + fuckingDescriptionAgain + '" Get yours at' ;

		$( this ).attr( 'href', encodeURI( newFuckingUrl ) );

	} );


} )( jQuery );
