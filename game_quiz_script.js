function send()

{

    number1 = document.getElementById("number1").value;

    number2 = document.getElementById("number2").value;



    actual_answer = parseInt(number1) * parseInt(number2);



    question_number = "<h1 class='sweetquiz' >" + number1 + "     " + "×" +  "     "  + number2 + "</h1>";

    input_box = "<label style='color: #ff99cc;'>Answer  :  </label>" + "<input type='number' class='answer_input_1'></input>";

    check_button = "<br> <br> <button type='button' class='btn btn-outline-info' onclick='Check()'>Check</button>";

    br = "<br><br><br><br><br><br>";

    row = question_number + input_box + check_button + br;



    document.getElementById("output").innerHTML = row;



    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";
}