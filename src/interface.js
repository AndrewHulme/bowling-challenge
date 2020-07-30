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

  $("#zeropins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(0);
    updateScore();
  });

  $("#onepin").on("click", function () {
    findCurrentFrame();
    addScoreToTable(1);
    updateScore();
  });

  $("#twopins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(2);
    updateScore();
  });

  $("#threepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(3);
    updateScore();
  });

  $("#fourpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(4);
    updateScore();

    if (midframe === true) {
      // $("#fivepins").hide();
      // $("#sixpins").hide();
      $("#sevenpins").hide();
      $("#eightpins").hide();
      $("#ninepins").hide();
      $("#tenpins").hide();
    } else {
      $("#fivepins").show();
      $("#sixpins").show();
      $("#sevenpins").show();
      $("#eightpins").show();
      $("#ninepins").show();
      $("#tenpins").show();
    }
  });

  $("#fivepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(5);
    updateScore();

    if (midframe === true) {
      $("#sixpins").hide();
      $("#sevenpins").hide();
      $("#eightpins").hide();
      $("#ninepins").hide();
      $("#tenpins").hide();
    } else {
      $("#sixpins").show();
      $("#sevenpins").show();
      $("#eightpins").show();
      $("#ninepins").show();
      $("#tenpins").show();
    }
  });

  $("#sixpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(6);
    updateScore();

    if (midframe === true) {
      $("#fivepins").hide();
      $("#sixpins").hide();
      $("#sevenpins").hide();
      $("#eightpins").hide();
      $("#ninepins").hide();
      $("#tenpins").hide();
    } else {
      $("#fivepins").show();
      $("#sixpins").show();
      $("#sevenpins").show();
      $("#eightpins").show();
      $("#ninepins").show();
      $("#tenpins").show();
    }
  });

  $("#sevenpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(7);
    updateScore();
  });

  $("#eightpins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(8);
    updateScore();
  });

  $("#ninepins").on("click", function () {
    findCurrentFrame();
    addScoreToTable(9);
    updateScore();
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
