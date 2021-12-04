

$("h1").css("color","purple");
$("button").css("color","green");
document.querySelector("h2").style.color="blue";

console.log($("h1").css("color"));
console.log($("h2").css("color"));
console.log($("h1").css("font-size"));

$("h1").addClass("big-title margin-50");

$("h1").text("bye");
$("h2").html("<en>how do u do?</en>");
$("button").text("hi");

$("a").attr("href","https://www.yahoo.com");

$("h1").click(function(){
  $("h1").css("color","purple");
});
$("button").click(function(){
  $("h1").css("color","red");
});

$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover",function(){   //mouseover can be replaced by click also
  $("h1").css("color","purple");
});

$("h1").before("<button>click here</button>");
$("h1").after("<button>click here</button>");
$("h1").prepend("<button>click here</button>");
$("h1").append("<button>click here</button>");

$("h2").remove();

//$("button").on("click",function(){
  //$("h1").hide();                              //opposite--show
//});
//$("button").on("click",function(){
  //$("h1").toggle();
//});
//$("button").on("click",function(){
  //$("h1").fadeOut();                             //opposite--fadeIn
//});
//$("button").on("click",function(){
  //$("h1").fadeToggle();
//});
//$("button").on("click",function(){
  //$("h1").slideToggle();
//});
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5});            //can't change color or style in this way only numerical value
});
