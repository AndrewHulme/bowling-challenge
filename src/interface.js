$(document).ready(function () {
  var game = new Game();
  var currentframe;
  var midframe = false;
  var endframe = false;
  var frametenspare = false;
  var frametenstrike = false;
  var firstroll;
  var numbersObject = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
  };

  function updateScore() {
    $("#currenttotal").text(game.calculateCurrentScore());
  }

  function findCurrentFrame() {
    currentframe = game.frames.length + 1;
  }

  function addScoreToTable(score) {
    if (midframe === false && endframe === false) {
      $("#frame" + currentframe + "roll1").text(score);
      midframe = true;
      firstroll = score;
    } else if (
      frametenstrike === true &&
      midframe === true &&
      endframe === false
    ) {
      $("#frame10roll2").text(score);
      endframe = true;
      midframe = false;
      secondroll = score;
    } else if (frametenstrike === true && endframe === true) {
      $("#frame10roll3").text(score);
      game.addFrame([firstroll, secondroll, score]);
    } else if (frametenspare === true) {
      $("#frame10roll3").text(score);
      game.addFrame([firstroll, secondroll, score]);
    } else if (
      game.frames.length === 9 &&
      midframe === true &&
      firstroll === 10 - score
    ) {
      $("#frame10roll2").text(score);
      frametenspare = true;
      secondroll = score;
    } else {
      $("#frame" + currentframe + "roll2").text(score);
      midframe = false;
      game.addFrame([firstroll, score]);
    }
  }

  function hideOrShowButtons(number) {
    if (frametenspare === true) {
      for (let i = 10; i > 0; i--) {
        $("#" + numbersObject[i.toString()] + "pins").show();
      }
    } else if (midframe === true) {
      for (let i = 10; i > 10 - number; i--) {
        $("#" + numbersObject[i.toString()] + "pins").hide();
      }
    } else {
      for (let i = 10; i > 0; i--) {
        $("#" + numbersObject[i.toString()] + "pins").show();
      }
    }
  }

  $("#zeropins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(0);
    updateScore();
  });

  $("#onepin").on("click", function () {
    findCurrentFrame();
    addScoreToTable(1);
    updateScore();
    hideOrShowButtons(1);
  });

  $("#twopins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(2);
    updateScore();
    hideOrShowButtons(2);
  });

  $("#threepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(3);
    updateScore();
    hideOrShowButtons(3);
  });

  $("#fourpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(4);
    updateScore();
    hideOrShowButtons(4);
  });

  $("#fivepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(5);
    updateScore();
    hideOrShowButtons(5);
  });

  $("#sixpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(6);
    updateScore();
    hideOrShowButtons(6);
  });

  $("#sevenpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(7);
    updateScore();
    hideOrShowButtons(7);
  });

  $("#eightpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(8);
    updateScore();
    hideOrShowButtons(8);
  });

  $("#ninepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(9);
    updateScore();
    hideOrShowButtons(9);
  });

  $("#tenpins").on("click", function () {
    findCurrentFrame();

    if (game.frames.length !== 9 && midframe === false) {
      $("#frame" + currentframe + "roll1").text(10);
      game.addFrame([10, 0]);
    } else if (game.frames.length !== 9 && midframe === true) {
      $("#frame" + currentframe + "roll2").text(10);
      midframe = false;
      game.addFrame([firstroll, 10]);
    } else if (
      game.frames.length === 9 &&
      midframe === false &&
      endframe === false
    ) {
      $("#frame10roll1").text(10);
      midframe = true;
      frametenstrike = true;
      firstroll = 10;
    } else if (
      frametenstrike === true &&
      midframe === true &&
      endframe === false
    ) {
      $("#frame10roll2").text(10);
      endframe = true;
      midframe = false;
      secondroll = 10;
    } else if (frametenstrike === true && endframe === true) {
      $("#frame10roll3").text(10);
      game.addFrame([firstroll, secondroll, 10]);
    } else if (frametenspare === true) {
      $("#frame10roll3").text(10);
      game.addFrame([firstroll, secondroll, 10]);
    } else if (
      game.frames.length === 9 &&
      midframe === true &&
      firstroll === 0
    ) {
      $("#frame10roll2").text(10);
      frametenspare = true;
      secondroll = 10;
    }

    updateScore();
  });
});
