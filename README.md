<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>うじゃんけん</title>
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="img/rock.png" type="image/x-icon">
</head>
<body>
  <img src="img/background-image.webp" alt="背景画像くん" class="background-image">

  <div class="container">
    <!--相手側のスペース-->
    <p class="enemy">相手</p>
    <div id="handContainer" class="handContainer">
      <p id="enemyHand">hand</p>
    </div>
    <!--プレイヤー側のスペース-->
    <div class="handContainer">
      <p id ="playerHand">hand</p>
    </div>
    <p class="player">自分</p>

    <button class="rock" id="rock">グー</button>
    <button class="scissor" id="scissor">チョキ</button>
    <button class="paper" id="paper">パー</button>

    <p class="result" id="result">result</p>
  </div>

  <script src="index.js" type="text/javascript"></script>
</body>
</html>
