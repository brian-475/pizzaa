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
})
$("document").ready(function(){
    $("#palace").click(function(){
        $("#form10").toggle();
    })
})
// my js
function findName(){
    var name=document.getElementById("#form").value;
    var nme=parseInt(name);
}
function getSize(){
    var size=document.getElementById("#form2").value;
    var sze=parseInt(size);
}
function getCrust(){
    var crust=document.getElementById("#form3").value;
    var crst=parseInt(crust);
}
function getToppings(){
    var topping=document.getElementById("#form4").value;
    var topp=parseInt(topping);
}
function getSavorySauce(){
    var sauce=document.getElementById("#form5").value;
    var sace=parseInt(sauce);
}
function getLux(){
    var lux=document.getElementById("#form6").value;
    var lx=parseInt(lux);
}
function quantity(){
    var quantity=document.getElementById("#Quantity").value;
    var quan=parseInt(quantity);
}
function checkOut(){
    var total=(findName()+getSize()+getCrust()+getToppings()+getSavorySauce()+getLux())*quantity()
    alert("kindly fill in the form");
}

    




























