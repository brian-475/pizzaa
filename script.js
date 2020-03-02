//This is my hover js

/*$("document").ready(function(){
    $(" #why").mouseenter(function(){
        $("#pizzaone").show();
    })
    $("#why").mouseleave(function(){
        $("#pizzaone").hide();
    })
    $(" #are").mouseenter(function(){
        $("#pizzatwo").show();
    })
    $("#are").mouseleave(function(){
        $("#pizzatwo").hide();
    })
    $("#you").mouseenter(function(){
        $("#pizzathree").show();
    })
    $("#you").mouseleave(function(){
        $("#pizzathree").hide();
    })
    $("#here").mouseenter(function(){
        $("#pizzafour").show();
    })
    $("#here").mouseleave(function(){
        $("#pizzafour").hide();
    })
    // my hover line 2
    $("#at").mouseenter(function(){
        $("#pizzafive").show();
    })
    $("#at").mouseleave(function(){
        $("#pizzafive").hide();
    })
    $("#this").mouseenter(function(){
        $("#pizzasix").show();
    })
    $("#this").mouseleave(function(){
        $("#pizzasix").hide();
    })
    $("#time").mouseenter(function(){
        $("#pizzaseven").show();
    })
    $("#time").mouseleave(function(){
        $("#pizzaseven").hide();
    })
    $("#of").mouseenter(function(){
        $("#pizzaeight").show();
    })
    $("#of").mouseleave(function(){
        $("#pizzaeight").hide();
    })
})*/

//my toggle work
$("document").ready(function(){
    $("#why").click(function(){
        $("#sat").toggle();
    })
    $("#are").click(function(){
        $("#love").toggle();
    })
    $("#you").click(function(){
        $("#lie").toggle();
    })
    $("#here").click(function(){
        $("#too").toggle();
    })
    $("#at").click(function(){
        $("#sing").toggle();
    })
    $("#this").click(function(){
        $("#dance").toggle();
    })
    $("#time").click(function(){
        $("#eat").toggle();
    })
    $("#of").click(function(){
        $("#sleep").toggle();
    })
    $("#palace").click(function(){
        $("#form10").toggle();
    })
})
//my JavaScript
$("document").ready(function(){
    $("#home").click(function(){
        event.preventDefault();
        var size=parseInt($("#form").val());
        var name=parseInt($("#form2").val());
        var crust=parseInt($("#form3").val());
        var topping=parseInt($("#form4").val());
        var savory=parseInt($("#form5").val());
        var lux=parseInt($("#form6"));
        var quantity=parseInt($("#quan").val());
        var amount=(crust*quantity || topping*quantity || savory*quantity ||lux*quantity);
        if(size===""|| name==="" || crust==="" || topping==="" ||savory==="" || lux==="" || quantity==="")
            alert("fill in the form and place the order immediatly");
        else if(size==="small"|| size==="medium"|| size==="large"||name==="#form2" ||
        crust==="#form3" || topping==="#form4" || savory==="#form5" || lux==="#form6"||quantity==="#quan");{
            alert("We have received that information");
            prompt("Where do you reside in?");
            alert("Delivery cost will be and is constant upon all routes 1500")
            alert("Thankyou for shopping at the Pizza palace");
            alert("you have choosen"+''+name+"and the amount is"+""+amount);
        }

    })
})
