'use strict';

/*
変数の宣言
const か let

関数の書き方
const hogeFunc = () => {
  // do Something......
};

実行
hogeFunc();


*/


(function() {
    let orderCount = 0;
    
    const pieces = document.querySelectorAll('.piece');

    const generateMultipulArray = () => {
	const array = _.map(pieces, (element) => element.className.replace('piece', '').trim());
	return _.chunk(array, 3);
    };

    const gameIsEnd = () => {
	const array = generateMultipulArray();
	console.table(array);

	// 勝敗判定(横)
	for ( var i = 0; i < array.length; i++ ) {    // 行の数だけループ
	    const horizontalPieceColor = array[i][0];

	    if ( !horizontalPieceColor ) { continue; }    // 行の数だけループ
	    
	    for ( var j = 1; j < array[i].length; j++ ) {
		if ( array[i][j] !== horizontalPieceColor ) { break; }    // 色が同じでなければ次の列へ
		if ( j === array[i].length-1 ) { return true; }    // for文が回りきっていたらtrue
	    }
	    
	}
	// 勝利判定(縦)
	for ( var i = 0; i < array[0].length; i++ ) {    // 列の数だけループ
	    const verticalPieceColor = array[0][i];

	    if ( !verticalPieceColor ) { continue; }    // 空なら次の列へ
	    
	    for ( var j = 1; j < array.length; j++ ) {
		if ( array[j][i] !== verticalPieceColor ) { break; }    // 色が同じでなければ次の列へ
		if ( j === array.length-1 ) { return true; }    // for文が回りきっていたらtrue
	    }
	    
	}

	return false;
    };
    
    const onClick = (event) => {
	const className = event.target.className;
	if (orderCount % 2 === 0) {
	    if (!/black/.test(className) && !/pink/.test(className)) {
		event.target.className += ' black';
		orderCount++;
	    }
	} else {
	    if (!/pink/.test(className) && !/black/.test(className)) {
		event.target.className += ' pink';
		orderCount++;
	    }
	}

	if (gameIsEnd()) {
	    alert('ゲーム終了です。');
	}
    };
    pieces.forEach((piece) => {
	piece.addEventListener('click', onClick, false);
    });
})();

