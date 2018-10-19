var currq;
var correct=0;
var incorrect=0;
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
    options:["5cL Rye whiskey, 2cL Sweet red vermouth, Dash of Angostura bitters","mint leaves, sugar, kentucky bourbon","3cl gin, 3cl Apricot brandy, 3cl Calvados",],
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
    qa.forEach(e => {
        display(e);    
    });
   
    $("form").hide();
    
})
$(document).on("click","#start",function(){
    //$("#answers").show();
    $("form").show();
    $("#display").show();
    stopwatch.start();
    $("#start").hide();
    $("#result").empty();
    $("#result").hide();
    incorrect = 0;
    correct = 0;
   // $("radio").unchecked();
})
//need to  make buttons to click for the answers. maybe radio buttons? 
//or divs? interesting. like boxes? for the drink ingreedents list. 
//begin display()
function display(y){
    var q1 = $("<div>"); 

   // $("#question").empty(); 
    //$("#answers").empty(); 
    //$("#result").empty(); 
   // document.getElementById("question").innerText = qo[0].question;
   //$("#question").text(y.question)
   var q = $("<div>");
   q.text(y.question);
   q1.append(q)
   //$("#question").append(q);
    y.options.forEach(x => {
        var qdiv = $("<input>");
        qdiv.attr("type","radio");
        qdiv.attr("value",x);
        qdiv.attr("name",y.question);
       qdiv.addClass("answer");
       var l = $("<label>");
       l.text(x);
       //console.log(qa[1].options.indexOf(x)) /*could use this line to number questions but for now it messes up how i evaluate correct answers */
        //qdiv.text(x);
        
      q1.append(qdiv);
       q1.append(l);
        q1.append("<br>");
        //document.getElementById("answers").innerText = x
        $("#answers").append(q1);
    });
}//end display
//this is where i evaluate if user selected correct answers
$(document).on("click", ".submit", function(event){
    event.preventDefault();
    $.each($("input[name='what is in a mint julep?']:checked"), function() {
        if ($(this).val() === qa[0].right) {
          correct++;
        }
        else {
          incorrect++;
        }
      });
      $.each($("input[name='what is in an Old Fashioned?']:checked"), function() {
        if ($(this).val() === qa[1].right) {
          correct++;
        }
        else {
          incorrect++;
        }
      });
      $.each($("input[name='what is in a Manhattan?']:checked"), function() {
        if ($(this).val() === qa[1].right) {
          correct++;
        }
        else {
          incorrect++;
        }
      });
      $.each($("input[name='what is in a John Collins?']:checked"), function() {
        if ($(this).val() === qa[1].right) {
          correct++;
        }
        else {
          incorrect++;
        }
      });
      $.each($("input[name='what is in an Angel face?']:checked"), function() {
        if ($(this).val() === qa[1].right) {
          correct++;
        }
        else {
          incorrect++;
        }
      });

      //hide questions:
      $("form").hide();
      $("#display").hide();
      stopwatch.stop();
      //display results
      var correctDiv = $("<div>").text("correct: "+correct);
      var incorrectDiv = $("<div>").text("incorrect: "+incorrect);

      $("#result").append(correctDiv, incorrectDiv);
      $("#result").show();
      $("#start").show();
      clearRadio();
})

/*
$(document).on("click", ".answer", function(){
    console.log(this)
    var userClicked = this;
    //console.log("question: " +userClicked.name);
    var index = jQuery.inArray(userClicked.name, qa)
    console.log(index);
    $(userClicked).text();
    stopwatch.reset();
    if ($(userClicked).val() === currq.right) {
        console.log("correct!")
        $("#result").text("correct!");
    }
    else{
        console.log("loser!")
    }
    next();
})//end .answer click event
*/

//load next question
function next(){
  var ran =  Math.floor(Math.random()*qa.length);
    
    currq =  qa[ran];
    console.log("this is my random number: " +currq)
    display(currq);
}//end next()


//begin clock
 //  Variable that will hold our setInterval that runs the stopwatch
 var intervalId;
  
 // prevents the clock from being sped up unnecessarily
 var clockRunning = false;
 // tells how much time to put on the clock
 var timesUp = false;
 var timeOut;

 var stopwatch = {
 time:200,
 //start reset
 reset: function() {
    stopwatch.time = 6;
    //next();
    stopwatch.start();
    $("#display").text(stopwatch.time);
    console.log("called reset()");

 },
 //end reset
    start: function() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        stopwatch.time=200;
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    } 
  },
  count: function() {
  
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    console.log("i'm in count()");

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(stopwatch.time);
    if (stopwatch.time === 0 ) {
        //alert("times up!");
    stopwatch.reset();
    timesUp = true;
    //stopwatch.reset();
    }
  },
  pause: function()
  {
      timesUp = false; 
      timeOut = setTimeout(stopwatch.count, 3000);
      timeOut;
      
  },
  stop: function(){
    clearInterval(intervalId)
    clockRunning = false;
  },
 }
 //stopwatch.start();

 //begin result function
 function result() {
     $("#result").text()
 }

 function clearRadio(){
   console.log("called clear()")
  $.each($("input[type='radio']:checked"),function(){
    this.checked = false;
  })
 }