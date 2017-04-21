'use strict';

(function () {
    fetch('http://localhost:4567/json')
	.then(res => res.json())
	.then(res => console.log(res))
})();
