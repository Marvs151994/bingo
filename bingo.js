$(window).on("load", function () {
    const numbers = new Set()
        .add("B </br> 1")
        .add("B </br> 2")
        .add("B </br> 3")
        .add("B </br> 4")
        .add("B </br> 5")
        .add("B </br> 6")
        .add("B </br> 7")
        .add("B </br> 8")
        .add("B </br> 9")
        .add("B </br> 10")
        .add("B </br> 11")
        .add("B </br> 12")
        .add("B </br> 13")
        .add("B </br> 14")
        .add("B </br> 15")
        .add("I </br> 16")
        .add("I </br> 17")
        .add("I </br> 18")
        .add("I </br> 19")
        .add("I </br> 20")
        .add("I </br> 21")
        .add("I </br> 22")
        .add("I </br> 23")
        .add("I </br> 24")
        .add("I </br> 25")
        .add("I </br> 26")
        .add("I </br> 27")
        .add("I </br> 28")
        .add("I </br> 29")
        .add("I </br> 30")
        .add("N </br> 31")
        .add("N </br> 32")
        .add("N </br> 33")
        .add("N </br> 35")
        .add("N </br> 35")
        .add("N </br> 36")
        .add("N </br> 37")
        .add("N </br> 38")
        .add("N </br> 39")
        .add("N </br> 40")
        .add("N </br> 41")
        .add("N </br> 42")
        .add("N </br> 43")
        .add("N </br >44")
        .add("N </br> 45")
        .add("G </br> 46")
        .add("G </br> 47")
        .add("G </br> 48")
        .add("G </br> 49")
        .add("G </br> 50")
        .add("G </br> 51")
        .add("G </br> 52")
        .add("G </br> 53")
        .add("G </br> 54")
        .add("G </br> 55")
        .add("G </br> 56")
        .add("G </br> 57")
        .add("G </br> 58")
        .add("G </br> 59")
        .add("G </br> 60")
        .add("O </br> 61")
        .add("O </br> 62")
        .add("O </br> 63")
        .add("O </br> 64")
        .add("O </br> 65")
        .add("O </br> 66")
        .add("O </br> 67")
        .add("O </br> 68")
        .add("O </br> 69")
        .add("O </br> 70")
        .add("O </br> 71")
        .add("O </br> 72")
        .add("O </br> 73")
        .add("O </br> 74")
        .add("O </br> 75")
    let currentNumber = []
    let previousNumber = []

    $("#setGame").click(function () {
        currentNumber = Array.from(numbers);
        previousNumber = [];
        document.getElementById('result').innerHTML = "Started";

        $("li").remove();
    });

    $("#callNum").click(function () {
        var index = Math.floor(Math.random() * currentNumber.length);
        var remove = currentNumber.splice(index, 1);
        document.getElementById('result').innerHTML = remove;
        previousNumber.push(remove);


        var prevoutput = "";
        for (x = 0; x < previousNumber.length; x++) {
            prevoutput += `<li>${previousNumber[x]}<br/></li>`;
        }
        document.getElementById('numberscalled').innerHTML = prevoutput;
    });

});