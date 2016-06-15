//cwiczenie 2

window.onload = function () {
	$("ul li:nth-child(3)").text("hh");
//cw 3
  $("ul li:nth-child(2)").after("<li> trzeci</li>");
//cw4  
  $("img").each(function(index){
    $(this).attr("alt", index);
  });
//zadanie z kliknięciem
  $("ul li:nth-child(1)").on("click",function(){
    alert("klik");
  });
//zadanie ze schowaniem obrazka
  //1
 // debugger;
  $("img").on("click",function schowaj(){
    $("img").hide();
  });
  //2
  var index=0;

  $("button").on("click", function klik(){
    $("img").eq(index).hide();
    index++;
  });

$("form").submit(function(event){
  event.preventDefault();
    
  var imie  = $("#imie");
  var nazwisko  = $("#nazwisko");
    
  var tabBody = $("table tbody");
  tabBody.append("<tr><td>" + imie.val() + "</td><td>" + nazwisko.val() + "</td></tr>");
  imie.val(""); 
  nazwisko.val("");
});
}