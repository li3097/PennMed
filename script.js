

adImages = new Array("banner-image.jpg","banner-image2.jpg","banner-image3.jpg, "banner-image4.jpg");
thisAd = 0
imgCt = adImages.length
function rotate() {
if (document.images) {
thisAd++
if (thisAd == imgCt) {
thisAd = 0
}
document.adBanner.src=adImages[thisAd]
setTimeout("rotate()", 3 * 1000)
}
}

