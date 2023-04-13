define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
  
  //Randomly choose the attribute words from a larger list of attribute words.
  //Internal studies in Project Implicit found no difference in performance between the words.
  var abilityWords = API.shuffle([ 'Leadership', 'Skillful', 'Capable', 'Insightful', 'Analytical', 'Innovative'
            ]);
  var personalityWords = API.shuffle([ 'Honest', 'Pleasant', 'Warm', 'Caring', 'Kind', 'Polite'
            ]);
  
    return iatExtension({
        category1 : {
            name : 'Male', //Will appear in the data.
            title : {
                media : {word : 'Male Names'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Ben'},
                {word: 'Paul'},
                {word: 'Daniel'},
                {word: 'John'},
                {word: 'Jeffrey'},   
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'Female', //Will appear in the data.
            title : {
                media : {word : 'Female Names'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Rebecca'},
                {word: 'Michelle'},
                {word: 'Emily'},
                {word: 'Julia'},
                {word: 'Anna'},	
            ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
		attribute1 :
		{
			name : 'Ability',
			title : {
				media : {word : 'Ability'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: abilityWords[0]},
				{word: abilityWords[1]},
				{word: abilityWords[2]},
				{word: abilityWords[3]},
				{word: abilityWords[4]},
				{word: abilityWords[5]}
			
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}

		},
		attribute2 :
		{

			name : 'Personality',
			title : {
				media : {word : 'Personality'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: personalityWords[0]},
				{word: personalityWords[1]},
				{word: personalityWords[2]},
				{word: personalityWords[3]},
				{word: personalityWords[4]},
				{word: personalityWords[5]},
	
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
    });
});
