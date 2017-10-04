    document.body.style.background = '#000';
    var div = document.createElement('div');

    document.body.appendChild(div);

    div.style.cssText = 'background-color: white;\
    position: absolute;\
    width: 2px;\
    height: 2px;\
    border-radius: 10px;\
        ';


    div.style.top =  Math.round(Math.random() * 1000) +'px';
    div.style.left =  Math.round(Math.random() * 2000) +'px';
function moveStars() {
    for (var i = 0; i < 300; i++) {
        div[i] = div.cloneNode(true);
        div[i].style.top =  Math.round(Math.random() * 1000) +'px';
        div[i].style.left =  Math.round(Math.random() * 2000) +'px';
        div[i].style.width =  Math.round(Math.random() * 3) +'px';
        div[i].style.height =  Math.round(Math.random() * 3) +'px';

        document.body.appendChild(div[i]);
        // document.onclick = div[i].style.left;

    }
}
moveStars();
