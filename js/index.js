$(document).ready(function() {

    var colorarray = ["blue", "red", "green", "orange", "yellow", "purple", "lime", "Olive", "DeepPink", "GreenYellow", "MediumPurple", "OrangeRed", "Pink", "MidnightBlue", "MediumSpringGreen", "PapayaWhip", "PeachPuff", "LawnGreen", "Gold", "Fuchsia", "DarkMagenta", "Crimson"];
    var prevrand = (colorarray.length) + 1;
    $('.bulle').each(function() {
        var rand = Math.floor(Math.random() * colorarray.length);
        if (rand === prevrand) {
            while (rand === prevrand) {
                rand = Math.floor(Math.random() * colorarray.length);
            }
        }
        $(this).css("background-color", colorarray[rand]);
        prevrand = rand;
    })
    $("h2").hide().fadeIn(3000);
    $("h3").hide().fadeIn(6000);

    var numRand, inpUser;
    var result = 0;
    var i = 0;
    $(".bulle-global").hide();

    $("#regle").click(function() {
        numRand = Math.floor(Math.random() * 10);
        console.log(numRand);
        i = 0;
        result = 0;
        $("#test").remove();
        $(".bulle-global").show();
    });

    $("#new").click(function() {
        numRand = Math.floor(Math.random() * 10);
        console.log(numRand);
        i = 0;
        result = 0;
        $("#test").remove();
        $(".bulle-global").show();
    });

    $(".bulle").click(function() {
        var nbr = $(this).text();
        i++;

        if (numRand > nbr && i < 3) {
            $("#test").remove();
            $("body").append("<div id='popup_name' class='popup_block'>c'est plus</div>");

        } else if (numRand < nbr && i < 3) {
            $("#test").remove();
            $(".result").append("<div id='test' class='moins'>c'est moins</div>");

        } else if (numRand == nbr) {
            result = 1;
            $("#test").remove();
            $(".result").append("<div id='test' class='win'>c'est gagné !!</div>");
            $(".bulle-global").hide();
            return false;

        }

        if (i === 3 && result != 1) {
            $("#test").remove();
            $(".result").append("<div id='test' class='lose'>il faut recommencer!!</div>");
            $(".bulle-global").hide();
            return false;
        }
    });









});