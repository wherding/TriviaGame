var currq;
var qa=[
    
    q2 ={ question:"what is in a mint julep?",
        options:["mint leaves, sugar, kentucky bourbon", "beer, jager, and redbull", "sugar cube, angostura bitter, bourbon"],
        right:"mint leaves, sugar, kentucky bourbon",
    },
    q3 ={ question:"what is in an Old Fashioned?",
        options:["5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters","sugar cube, angostura bitter, bourbon","jager and redbull" ],
        right:"sugar cube, angostura bitter, bourbon"
    },
    q4 ={ question:"what is in a Manhattan?",
    options:["5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters","mint leaves, sugar, kentucky bourbon",],
    right:"5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters"
    },
    q5={ question:"what is in a John Collins?",
    options:["5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters","mint leaves, sugar, kentucky bourbon", "4.5cL gin, 3cl lemon juice, 1.5cl sugar syrup, and 6cl carbonated water"],
    right:"4.5cL gin, 3cl lemon juice, 1.5cl sugar syrup, and 6cl carbonated water"    
    },
    q6 ={ question:"what is in an Angel face?",
    options:["5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters","mint leaves, sugar, kentucky bourbon","3cl gin, 3cl Apricot brandy, 3cl Calvados"],
    right:"3cl gin, 3cl Apricot brandy, 3cl Calvados"
    },
]
$(document).ready( function(){
    var ran =  Math.floor(Math.random()*qa.length);
    currq = qa[ran];
    console.log("this is my random number: " +currq)
    display(currq);
})
//need to  make buttons to click for the answers. maybe radio buttons? 
//or divs? interesting. like boxes? for the drink ingreedents list. 
//begin display()
function display(y){
    $("#question").empty(); 
    $("#answers").empty(); 
   // document.getElementById("question").innerText = qo[0].question;
   $("#question").text(y.question)
    y.options.forEach(x => {
        var qdiv = $("<div>");
       qdiv.addClass("answer")
       //console.log(qa[1].options.indexOf(x)) /*could use this line to number questions but for now it messes up how i evaluate correct answers */
        qdiv.text(x);
        $("#answers").append(qdiv);
        //document.getElementById("answers").innerText = x
    });
}//end display



$(document).on("click", ".answer", function(){
    console.log(this)
    var userClicked = this;
    $(userClicked).text();
    if ($(userClicked).text() === currq.right) {
        console.log("correct!")
    }
    next();
})//end .answer click event

//load next question
function next(){
  var ran =  Math.floor(Math.random()*qa.length);
    
    currq = qa[ran];
    console.log("this is my random number: " +currq)
    display(currq);
}//end next()
