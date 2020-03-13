// creates an array of objects to store quote related information
var quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        category: "#programming"
    },
    {
        quote: "What one programmer can do in one month, two programmers can do in two months.",
        source: "Fred Brooks",
        category: "#programming"
    },
    {
        quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
        source: "Andy Hunt",
        category: "#programming"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
        source: "Oscar Godson",
        category: "#programming"
    },
    {
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        source: "Louis Srygley",
        category: "#programming"
    },
    {
        quote: "Java is to JavaScript as ham is to hamster.",
        source: "Jeremy Keith",
        category: "#programming"
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        source: "Linus Torvolds",
        category: "#programming"
    },
    {
        quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
        source: "Doug Linder",
        category: "#programming"
    },
    {
        quote: "Functions should do one thing. They should do it well. They should do it only.",
        source: "Robert C. Martin",
        category: "#programming"
    },
    {
        quote: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        category: "#success"
    },
    {
        quote: "Self-education is, I firmly believe, the only kind of education there is.",
        source: "Isaac Asimov",
        category: "#learning"
    },
    {
        quote: "Treat your code like poetry and take it to the edge of the bare minimum.",
        source: "Ilya Dorman",
        category: "#programming"
    },
    {
        quote: "It's all talk until the code runs.",
        source: "Ward Cunningham",
        category: "#programming"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        source: "John Woods",
        category: "#programming"
    },
    {
        quote: "It is better to fail in originality that to succeed in imitation.",
        source: "Herman Melville",
        category: "#success"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        source: "Thomas Jefferson",
        category: "#success"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",
        category: "#success"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        source: "Jim Rohn",
        category: "#success"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin",
        category: "#learning"
    },
    {
        quote: "Being a student is easy. Learning requires actual work.",
        source: "William Crawford",
        category: "#learning"
    },
    {
        quote: "Anything worth doing well is worth doing poorly at first.",
        source: "Ray Congdon",
        category: "#learning"
    }
];
// creates an array of objects to store background and button color information
// I didn't want to randomize the background color because it can sometimes lead to hard to read quotes
var colors = [
    {
        background: "#ff2e63", //pink
        button: "#252a34"
    },
    {
        background: "#00adb5", //teal
        button: "#393e46"
    },
    {
        background: "#f38181", //salmon
        button: "#625772"
    },
    {
        background: "#6639a6", //purple
        button: "#521262"
    },
    {
        background: "#3f72af", //blue
        button: "#112d4e"
    },
    {
        background: "#f95959", //orange
        button: "#455d7a"
    },
    {
        background: "#a3de83", //lt green
        button: "#2eb872"
    },
    {
        background: "#118df0", //bright blue
        button: "#0e2f56"
    },
    {
        background: "#ff5722", //bright orange
        button: "#393e46"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    }
];
let timer;

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
    let randomColor = Math.floor(Math.random() * colors.length);

    return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
    timer = setInterval(printQuote, 10000);
}

// clears the setInterval method from the timer variable
function clearTimer() {
    clearInterval(timer);
}

function printQuote() {
    // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
    // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
    // creates the html variable and uses the currentQuote variable along with key values to build a string
    let currentQuote = getRandomQuote();
    let currentColor = getRandomColor();
    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    // tests to see if the date property is present in the currentQuote and if so, adds it to the string
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    html += "<span class='category'> " + currentQuote.category + "</span>";

    // writes the info from the html variable to the div with the quote-box id
    // uses the currentColor variable to change the background color
    // uses the currentColor variable to change the button color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;

    // clears any previous timers that might be running and starts a new one
    clearTimer();
    startTimer();
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);