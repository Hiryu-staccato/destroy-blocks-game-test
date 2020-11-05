
var blocks = document.getElementById("Blocks")

//四角のマウス位置を設定
var rectx ;
var recty ;

var blockX = 5;
var blockY = 30;

function setup() {
  //キャンバスの作成
  createCanvas(windowWidth, windowHeight);
  //円の毎秒表示するフレーム数を指定（更新設定）
  frameRate(60);
    //円の初期位置を設定
    placeX = random(0,width);
    placeY = 100;
    //円の速度
    speedX = 3;
    speedY = 2;
}

//マウス位置で四角を動かす
function mouseDragged() {
   rectx = mouseX-45;
   recty = height-100;
   //マウスを画面外に出なくする
   if(rectx < 0){
    rectx = 0;
  }else if(rectx > windowWidth-90){
    rectx = windowWidth-100;
  }
  }

//ブロックを生成する

function cblock(){
  rect(100,30,50,50);
}
/*
  var block = document.createElement('context');
  block = cblock();
  blocks.appendChild(block);

  function cblock(){
    rect(100,30,50,50);
  }
*/
//反射する円を設定
//円の中心位置
var placeX;
var placeY;
//円の速度
var speedX;
var speedY;

function draw(){
    //円と四角の最新部分を表示させる
    background(255);
    //円の座標を更新
    placeX = placeX + speedX;
    placeY = placeY + speedY;
    noStroke();
    //円も四角も塗りつぶし
    fill(100);
    ellipse(placeX,placeY,50,50);

    //円が画面の左・右端に到達した場合
    if(placeX < 0 || placeX > width){
        //X軸の速度を反転
        speedX = speedX * -1;
    }
    //円が画面の上に到達した場合
    if(placeY < 0 ){
        //Y軸を反転
        speedY = speedY * -1;
    }
  //四角を表示
   rect(rectx,recty,90,20);

   //当たり判定
   if (placeX <= rectx+90 && placeX >= rectx   &&  placeY <= recty+20 && placeY >= recty){
    speedY = speedY * -1;
  }

  　//ブロックの自動生成

  for (n=0; n<2; n++){
  for(i=0; i<10; i++){
    var BlockX = blockX+i*62;
    var BlockY = blockY+n*34;
    rect(blockX+i*62,blockY+n*34,60,30);
    /*for(n=0; n<208; n+=52){
      rect(100+n,30,50,50);
    }*/
  }
}

  //ブロックの当たり判定１
  if (placeX <= BlockX && placeX >= blockX && placeY <= blockY+30 && placeY >= blockY){
    speedY = speedY * -1;
    console.log('当たった１');
    
  }

  //ブロックの当たり判定２
  if (placeX <= BlockX && placeX >= blockX && placeY <= BlockY+30 && placeY >= BlockY){
    speedY = speedY * -1;
    console.log('当たった２');
  }
}

//球がブロックを破壊する
//オブジェクト


