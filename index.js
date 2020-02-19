let quotes = [
    "'When the going gets tough, the tough use JavaScript'",
    "'No one saves us but ourselves'",
    "'It only takes time  to get better'",
    "'The most certain  way to succeed is always to try'",
    "'I hear and I forget. I see and I remember. I do and I understand.'",
    "'Our greatest glory is not in never falling, but in getting up every time we do.'",
    "'You had me at Hello World'",
    "'Worry not that no one knows of you; seek to be worth knowing.'",
    "'Every error is a chance to learn'",
    "'Difficulties mastered are opportunities won'",
    "'Success is not final, failure is not fatal: it is the courage to continue that counts.'",
    "'If a man neglects education, he walks lame to the end of his life.'",
    "'Science is nothing but perception.'",
    "'He who is not a good servant will not be a good master.'",
    "'You're an array of sunshine'",
    "'Quality is not an act,it is a habit'",
    "'It is during our darkest moments that we must focus to see the light.'",
    "'If there is anything that a man can do well, I say let him do it. Give him a chance.'",
    "'God Gives Birth To gods!'",
    "'Where progress is desire,change is Inevitable.'",
    "'The biggest adventure you can ever take is to live the life of your dreams'"
    ]


    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    }

    