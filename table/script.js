$(function() {
  // セルをマウスオーバーしたときの処理
  $("td").hover(function() {
    // 親要素(tr)に "target" クラスを追加
    $(this).parent().addClass("target");

    // 親要素から見て、自分が何番目の子要素なのか調べる
    let myIndex = $(this).index();

    // myIndexに1プラス
    myIndex++;

    // 各行の「myIndex番目の子要素」にtargetクラスを追加する
    $("td:nth-child(" + myIndex + ")").addClass("target");
  }, function() {
    // マウスアウト時に "target" クラスを削除
    $(".target").removeClass("target");
  });
});