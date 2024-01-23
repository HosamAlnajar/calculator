$(document).ready(function(){
    function addition() {
        let num1 = $(".addition .num1").val();
        let num2 = $(".addition .num2").val();
        //console.log(num1 + num2)
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let result = num1 + num2;
        $(".addition .result").text(result)

        resetFeilds(".addition");
    }

    function subtraction() {
        let num1 = $(".subtraction .num1").val();
        let num2 = $(".subtraction .num2").val();
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let result = num1 - num2;
        $(".subtraction .result").text(result)

        resetFeilds(".subtraction");
    }

    function multiplication() {
        let num1 = $(".multiplication .num1").val();
        let num2 = $(".multiplication .num2").val();
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let result = num1 * num2;
        $(".multiplication .result").text(result)

        resetFeilds(".multiplication");
    }

    function division() {
        let num1 = $(".division .num1").val();
        let num2 = $(".division .num2").val();
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let result = num1 / num2;
        $(".division .result").text(result)

        resetFeilds(".division");
    }

    
    $(".addition .button").on("click", addition);
    $(".subtraction .button").on("click", subtraction);
    $(".multiplication .button").on("click", multiplication);
    $(".division .button").on("click", division);

    function resetFeilds(boxClass) {
        let feildNumber1 = boxClass + " .num1";
        let feildNumber2 = boxClass + " .num2";
        $(feildNumber1).val("");
        $(feildNumber2).val("")
      }

});