$(document).ready(function() {
    $("h2").hide().fadeIn(3000);
    $("h3").hide().fadeIn(6000);

    var numRand;
    var score = 0;
    var result = 0;
    var i = 0;
    $(".bulle-global").hide();

    $("#regle").click(function() {
        $("#test").remove();
        $(".result").append("<div id='test'>Trouver un chiffre entre 0 et 9<br>15 points au 1er essai<br>7 points au 2ème<br>3 points au 3ème</div>");
    });

    $("#point").click(function() {
        $("#test").remove();
        $(".result").append("<div id='test'>Score  " + score + "</div>");
    });

    $("#reset").click(function() {
        $("#test").remove();
        score = 0;
        $(".result").append("<div id='test'>Remise à zéro du score</div>");
    });

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

    $("#new").click(function() {
        numRand = Math.floor(Math.random() * 10);
        console.log(numRand);
        i = 0;
        result = 0;
        $("#test").remove();
        $(".bulle-global").show();
        $(".bulle").show();
    });

    $(".bulle").click(function() {
        var nbr = $(this).text();
        i++;
        if (numRand > nbr && i < 3) {
            $(this).hide();
            $("#test").remove();
            $(".result").append("<div id='test' class='plus'>PLUS!!!</div>").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

        } else if (numRand < nbr && i < 3) {
            $(this).hide();
            $("#test").remove();
            $(".result").append("<div id='test' class='moins'>MOINS!!!</div>").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);

        } else if (numRand == nbr) {
            result = 1;
            if (i == 1) {
                score = score + 15;
            } else if (i == 2) {
                score = score + 7;
            } else if (i == 3) {
                score = score + 3;
            }
            $("#test").remove();
            $(".result").append("<div id='test' class='win'>GAGNÉ!!!!</div>").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
            $(".bulle-global").hide();
            return false;
        }

        if (i === 3 && result != 1) {
            $("#test").remove();
            $(".result").append("<div id='test' class='lose'>PERDU!!!! REJOUER!!!!</div>").fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
            $(".result").append("<div id='test' class='lose'>Le chiffre mystère était " + numRand + "</div>");
            $(".bulle-global").hide();
            return false;
        }
    });



});