let round = prompt("จำนวนรอบที่ต้องการจะเล่น");
let sum = 0;
for (var i = 1; i <= round; i++) {
  var answer = prompt("ทายครั้งที่" + " " + i + " : " + "หัว หรือ ก้อย?");
  var random_answer = "";
  if (Math.floor(Math.random() * 10) >= 5) {
    //หัว
    random_answer = "หัว";
  } else {
    //ก้อย
    random_answer = "ก้อย";
  }
  if (answer == random_answer) {
    alert("ถูกต้อง เก่งมากเลย");
  } else {
    alert("ทายผิด ลองใหม่นะ");
  }
  console.log(random_answer + " : " + answer);

  document.getElementById("game-list").innerHTML +=
    "<br>" +
    " " +
    "ทายครั้งที่" +
    " " +
    i +
    " : " +
    answer +
    " " +
    "//" +
    " " +
    "ผลที่ออก" +
    " : " +
    random_answer +
    " " +
    "<br>" +
    "<br>";

  if (answer == random_answer) {
    answer = 1;
  } else {
    answer = 0;
  }
  console.log(answer);

  sum = sum + parseInt(answer);
  document.getElementById("game_score").innerHTML =
    "<strong>" + "คะแนนรวม" + " " + sum + " " + "คะแนน";
}

//document.getElementById("game-list").innerHTML =
answer + " " + random_answer + "<br>";
