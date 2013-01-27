$(function(){

   $document = $(document);
   var imgBack = document.getElementById("back");
   var imgFront =  document.getElementById("front");
   $speedBack = imgBack.dataset.speed;
   $speedFront = imgFront.dataset.speed;
   $topPixels = imgFront.dataset.top;
   $leftPixels = imgFront.dataset.left;

   $document.mousemove(function(event){

        $leftBack = -(event.pageX / $speedBack);
        $topBack = -(event.pageY / $speedBack);
        $leftFront = $leftPixels -(event.pageX / $speedFront);
        $topFront = $topPixels -(event.pageY / $speedFront);

        imgFront.style.left = $leftFront+"px";
        imgFront.style.top = $topFront+"px";

   });

});