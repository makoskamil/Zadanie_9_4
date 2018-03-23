function drawTree(w) {
  var star = '';
    
    for (var i=0; i<=w; i++) {
        star = '*';
        for (var j=0; j<i; j++ ) {
            star += '**';
        }
        console.log(star);
    }
}

drawTree(8);