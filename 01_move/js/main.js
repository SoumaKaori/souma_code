$('#btn').on('click',function(){
  TweenMax.to('#obj', 0.5, {x:300})
  TweenMax.to('#obj', 0.5,{y:300, delay:0.5})
  TweenMax.to('#obj', 0.5, {x:0, delay:1})
  TweenMax.to('#obj', 0.5,{y:0, delay:1.5})
});
/*
・TweenMax→DOMアニメーションに特化したJavaScriptライブラリ
ボタンを押したら四角を右→下→左→上に移動させる簡易的な動作を作った。
2回目以降の移動は「delay」で動き始める時間に時差をつけなければ
動作が同時に動き、斜めに移動する。
TweenMax.to('htmlの要素', 要素が動くスピード,{要素を動かす方向, 時差})
*/
