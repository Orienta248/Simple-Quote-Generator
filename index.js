let quotes = [
    "'When the going gets tough, the tough use JavaScript'Codezinga",
    "'No one saves us but ourselves'-Buddha",
    "'It only takes time  to get better'-Orienta",
    "'The most certain  way to succeed is always to try'-Thomas Edison",
    "'I hear and I forget. I see and I remember. I do and I understand.'-Confucius",
    "'Our greatest glory is not in never falling, but in getting up every time we do.'-Ralph Waldo Emerson",
    "'You had me at Hello World'-Orienta",
    "'Worry not that no one knows of you; seek to be worth knowing.'-Confucius",
    "'Every error is a chance to learn'-Orienta",
    "'Difficulties mastered are opportunities won'-Winston Churchill",
    "'Success is not final, failure is not fatal: it is the courage to continue that counts.-Winston Churchill'",
    "'If a man neglects education, he walks lame to the end of his life.'-Plato",
    "'Science is nothing but perception.'-Plato",
    "'He who is not a good servant will not be a good master.'-Plato",
    "'You're an array of sunshine'-Codezinga",
    "'In teaching you learn,in learning you teach'-Kizz Daniel",
    "'Quality is not an act,it is a habit'-Aristotle",
    "'It is during our darkest moments that we must focus to see the light.'-Aristotle",
    "'If there is anything that a man can do well, I say let him do it. Give him a chance.'-Abraham Lincoln",
    "'God Gives Birth To gods!'-Chris Oyakhilome",
    "'Where progress is desire,change is Inevitable.'-Matthew Ashimolowo",
    "'The biggest adventure you can ever take is to live the life of your dreams'-Oprah Winfrey"
    ]


    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    }

    