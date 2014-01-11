var image1 = new Image()
image1.src = "pics/image1.png"
var image2 = new Image()
image2.src = "pics/image2.png"
var image3 = new Image()
image3.src = "pics/image3.png"

var step = 1;

function bildspel() {
    document.images.bildspel.src = eval("image" + step + ".src");
    if (step < 3) step++;
    else step = 1;
    setTimeout("bildspel()", 5000);
}

bildspel();