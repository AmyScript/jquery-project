

$(function(){

	//define the quotes array
	var quotesArray =  [
			{
			emotionBefore: "sad",
			emotionAfter: "happy",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "The best cure for a bad day is a good friend",
				author: "Hallmark Card"
				},				{
				quoteType: "funny",
				quote: "Wine is constant proof that God loves us and loves to see us happy",
				author: "Benjamin Franklin"
				},				{
				quoteType: "huh",
				quote: "If you want to be happy, be",
				author: "Leo Tolstoy"
				}
			]
			},
			{
			emotionBefore: "sad",
			emotionAfter: "relaxed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Art raises its head where creeds relax",
				author: "Nietzsche"
				},				
				{
				quoteType: "funny",
				quote: "The main thing to do is relax and let your talent do the work",
				author: "Charles Barkley"
				},				
				{
				quoteType: "huh",
				quote: "Telling people they look relaxed makes them look relaxed",
				author: "Douglas Coupland"
				}
			]
			},
			{
			emotionBefore: "sad",
			emotionAfter: "stressed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Love your enemies just in case your friends turn out to be a bunch of bastards",
				author: "R. A. Dickson"
				},				
				{
				quoteType: "funny",
				quote: "Hell is other people",
				author: "Sartre"
				},				
				{
				quoteType: "huh",
				quote: "I stress a lot, sometimes",
				author: "David Ortiz"
				}
			]
			},
			{
			emotionBefore: "sad",
			emotionAfter: "sad",
			quoteGroup: [
				{
				quoteType: "huh",
				quote: "If you want to make God laugh, tell him about your plans.",
				author: "Woody Allen"
				},				{
				quoteType: "funny",
				quote: "Just remember if this is the worst day of your life, it's only the worst day of your life so far",
				author: "H. Simpson"
				},				{
				quoteType: "hallmark",
				quote: "What a bummer it is to be a human being",
				author: "Kurt Vonnegut"
				}
			]
			},
			//happy
			{
			emotionBefore: "happy",
			emotionAfter: "happy",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Being happy never goes out of style.",
				author: "Lilly Pulitzer"
				},				{
				quoteType: "funny",
				quote: "Some cause happiness wherever they go; others whenever they go",
				author: "Anonymous"
				},				{
				quoteType: "huh",
				quote: "People say I look so happy - and I say, 'That's the Botox.'",
				author: "Dolly Parton"
				}
			]
			},
			{
			emotionBefore: "happy",
			emotionAfter: "relaxed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "I'm happy and at peace with where I am at life",
				author: "Rebecca Lobo"
				},				{
				quoteType: "funny",
				quote: "People say nothing is impossible, but I do nothing every day",
				author: "A.A. Milne"
				},				{
				quoteType: "huh",
				quote: "Therapy can be a good thing; it can be therapeutic",
				author: "Alex Rodriguez"
				}
			]
			},
			{
			emotionBefore: "happy",
			emotionAfter: "stressed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Death twitches my ear:'Live,'he says,'I am coming'",
				author: "Virgil"
				},				{
				quoteType: "funny",
				quote: "Contrary to general belief, an artist is never ahead of his time but most people are far behind theirs",
				author: "Edgard Varese"
				},				{
				quoteType: "huh",
				quote: "I feel happy to terrify kids.",
				author: "R. L. Stine"
				}
			]
			},
			{
			emotionBefore: "happy",
			emotionAfter: "sad",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Only dumb people are happy",
				author: "Courtney Love"
				},				{
				quoteType: "funny",
				quote: "I am the least racist person ever",
				author: "Donald Trump"
				},				{
				quoteType: "huh",
				quote: "No one's really happy anyway, it's not human.",
				author: "Billie Joe Armstrong"
				}
			]
			},
			//stressed
			{
			emotionBefore: "stressed",
			emotionAfter: "happy",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Don't worry be happy",
				author: "Bobby McFerrin"
				},				{
				quoteType: "funny",
				quote: "Just watching my cats can make me happy",
				author: "Paula Cole"
				},				{
				quoteType: "huh",
				quote: "Show me a mall, and I'm happy",
				author: "Julia Roberts"
				}
			]
			},
			{
			emotionBefore: "stressed",
			emotionAfter: "relaxed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Nothing in the affairs of men is worthy of great anxiety.",
				author: "Plato"
				},				{
				quoteType: "huh",
				quote: "Come find me and I'll give you a back rub 😉",
				author: "Julian"
				},				{
				quoteType: "funny",
				quote: "I hope that after I die, people will say of me:'That guy sure owe me a lot of money'",
				author: "Jack Handey"
				}
			]
			},
			{
			emotionBefore: "stressed",
			emotionAfter: "stressed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "I love deadlines. I like the whooshing sound they make as they fly by",
				author: "Douglas Adams"
				},				{
				quoteType: "funny",
				quote: "If you fall, I'll always be there",
				author: "The Floor"
				},				{
				quoteType: "huh",
				quote: "We live in an age where pizza gets to your home before the police",
				author: "Jeff Marder"
				}
			]
			},
			{
			emotionBefore: "stressed",
			emotionAfter: "sad",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Fortune knocks but once, but misfortune has much more patience",
				author: "Dr. Laurence J. Peter"
				},				
				{
				quoteType: "funny",
				quote: "The trouble with the rat race is that even if you win, you're still a rat",
				author: "Lily Tomlin"
				},				
				{
				quoteType: "huh",
				quote: "If you don't control your mind, someone else will",
				author: "John Allston"
				}
			]
			},
			//relaxed
			{
			emotionBefore: "relaxed",
			emotionAfter: "happy",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Think of all the beauty still left around you and be happy",
				author: "Anne Frank"
				},				
				{
				quoteType: "funny",
				quote: "It's fun to play happy people",
				author: "Amy Ryan"
				},				
				{
				quoteType: "huh",
				quote: "I am just happy to be part of the Nike family",
				author: "LeBron James"
				}
			]
			},
			{
			emotionBefore: "relaxed",
			emotionAfter: "relaxed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Whatever you are, be a good one",
				author: "Abraham Lincoln"
				},				
				{
				quoteType: "funny",
				quote: "I'm not running away from hard work, I'm too lazy to run.",
				author: "Anonymous"
				},				
				{
				quoteType: "huh",
				quote: "I hear and I forget. I see and I remember. I do and I understand",
				author: "Confucius"
				}
			]
			},
			{
			emotionBefore: "relaxed",
			emotionAfter: "stressed",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "The one who loves the least, controls the relationship",
				author: "Robert Anthony"
				},				
				{
				quoteType: "funny",
				quote: "I can't relax. I find vacations problematic",
				author: "John Oliver"
				},				
				{
				quoteType: "huh",
				quote: "Think about how stupid the average person is, then realize that half of us are stupider than that",
				author: "George Carlin"
				}
			]
			},
			{
			emotionBefore: "relaxed",
			emotionAfter: "sad",
			quoteGroup: [
				{
				quoteType: "hallmark",
				quote: "Everyone is a moon, and has a dark side which he never shows to anybody",
				author: "Mark Twain"
				},				
				{
				quoteType: "funny",
				quote: "The supreme irony of life is hardly anyone ever gets out of it alive",
				author: "Robert Heinlein"
				},				
				{
				quoteType: "huh",
				quote: "I found that being with happy positive people annoys me",
				author: "Karl Pilkington"
				}
			]
			}
	];
console.log("ready")
var currentMood;
var futureMood;

console.log(currentMood);
//Get the category of the current mood
	$(".currentEmotion .iconWrapper .icon").on('click', function(){
		currentMood = $(this).children().attr('title');
		console.log(currentMood);
		//add class of selected to icon that was clicked on
		$('.currentEmotion .icon').removeClass('selected');
		$(this).addClass('selected');
		//clear quote area
		$('.popup h3').remove();
		//clear twitter button
		var elem = $('#twtbox');
		elem.html(" ");
		
	});

//Get the category of the desired mood
	$(".futureEmotion .iconWrapper .icon").on('click', function(){
		futureMood = $(this).children().attr('title');
		console.log(futureMood);
		//add class of selected to icon that was clicked on
		$('.futureEmotion .icon').removeClass('selected');
		$(this).addClass('selected');
		//clear quote area
		$('.popup h3').remove();
		//clear twitter button
		var elem = $('#twtbox');
		elem.html(" ");

	});
//Get quote category
	var quoteCategory;
	$('.quoteSelector').on('click', function(){
		quoteCategory = $(this).val();
		$('.quoteSelector').removeClass('selected');
		$(this).addClass('selected');
		console.log(quoteCategory);
	});

// Check if current and desired have both been selected
	var currentQuotes=[];
	var finalQuotes=[];
	var finalStatement;

	$("button.submit").on('click', function(){
		if (currentMood !== undefined && futureMood !== undefined && quoteCategory !== undefined){
			
			$('.popup').removeClass("invisible");
			//Go through array of quotes and find quotes that matches the current mood
			currentQuotes = quotesArray.filter(function(value){
				return value.emotionBefore === currentMood;
			});
			//From the above data, find quotes that matches the desired mood
			finalQuotes = currentQuotes.filter(function(value){
				return value.emotionAfter === futureMood;
			});

			//start selecting different categories
			if (quoteCategory === "random") {
			//generate random number to display quote
				var random = Math.floor(Math.random() * (finalQuotes[0].quoteGroup.length));
				finalStatement = finalQuotes[0].quoteGroup[random];
			}
			if (quoteCategory === "hallmark") {
				var quoteArray = finalQuotes[0].quoteGroup;
				finalStatement = quoteArray.filter(function(value){
					console.log(value.quoteType);
					return value.quoteType == "hallmark";
				});
				finalStatement = finalStatement[0];
			}
			if (quoteCategory === "funny") {
				var quoteArray = finalQuotes[0].quoteGroup;
				finalStatement = quoteArray.filter(function(value){
					console.log(value.quoteType);
					return value.quoteType == "funny";
				});
				finalStatement = finalStatement[0];
			}
			if (quoteCategory === "huh") {
				var quoteArray = finalQuotes[0].quoteGroup;
				finalStatement = quoteArray.filter(function(value){
					console.log(value.quoteType);
					return value.quoteType == "huh";
				});
				finalStatement = finalStatement[0];
			}
			var quoteString = '<h3>You are ' + currentMood + ' and you want to be ' + futureMood + ' , here\'s a quote for you: </h3><h3>'+ finalStatement.author + ' once said: ' + finalStatement.quote + '</h3>';
			$('.popup').append(quoteString); 
			var twitterString = '"' + finalStatement.quote + '" - ' + finalStatement.author; 
			twitter(twitterString);
			currentMood = undefined;
			futureMood = undefined;
			$('.icon').removeClass('selected');
			
		}
		else {
			if (quoteCategory === undefined){
				alert("Please pick a quote category!")
			} else {
				alert("Please pick two emotions!");
			}
		}
	});

	$('.popup div').on('click', function(){
		$('.popup').addClass("invisible");
	})

	function twitter(twitterString) {
				//create twitter link with custom quote
				var link = document.createElement('a');
				link.setAttribute('href', 'https://twitter.com/share');
		       	link.setAttribute('class', 'twitter-share-button');
		       	link.setAttribute('style', 'margin-top:5px;');
		       	link.setAttribute('id', 'twitterbutton');
		       	link.setAttribute("data-text", "" + twitterString + "");
		       	link.setAttribute("data-url", "http://quotes.amyscript.com");
		       	link.setAttribute("data-size", "large");

		      	// Put it inside the twtbox div
		       	tweetdiv  =  document.getElementById('twtbox');
		       	tweetdiv.appendChild(link);
		       	twttr.widgets.load(); //very important
	}	



//display random quote from results



});