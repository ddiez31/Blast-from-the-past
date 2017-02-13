$(document).ready(function() {

    var numRand, inpUser;
    var result = 0;
    var i = 0;
    $(".game").hide();

    $("#new").click(function() {
        numRand = Math.floor(Math.random() * 10);
        console.log(numRand);
        i = 0;
        result = 0;
        $("#test").remove();
        $(".game").show();

    });

    $("#send").click(function() {
        i++;
        inpUser = $(".inpUser").val();

        if (numRand > inpUser && i < 3) {
            $("#test").remove();
            $(".result").append("<div id='test' class='plus'>c'est plus</div>");
            inpUser = $(".inpUser").val("");

        } else if (numRand < inpUser && i < 3) {
            $("#test").remove();
            $(".result").append("<div id='test' class='moins'>c'est moins</div>");
            inpUser = $(".inpUser").val("");

        } else if (numRand == inpUser) {
            result = 1;
            $("#test").remove();
            $(".result").append("<div id='test' class='win'>c'est gagné !!</div>");
            return false;

        }
        if (i === 3 && result != 1) {
            $("#test").remove();
            $(".result").append("<div id='test' class='lose'>il faut recommencer!!</div>");
            return false;
        }

    });




});