$(function(){

   $document = $(document);
   $contextWidth = $document.width();
   $contextHeight = $document.height();

   var imgFront =  document.getElementById("front");
   var pipa =  document.getElementById("pipa");
   var gaivota =  document.getElementById("gaivota");

   $speedFront = imgFront.dataset.speed;
   $topPercent = imgFront.dataset.top;
   $leftPercent = imgFront.dataset.left;

   $speedPipa = pipa.dataset.speed;
   $topPercentPipa = pipa.dataset.top;
   $lefPercentPipa = pipa.dataset.left;

   $speedGaivota = gaivota.dataset.speed;
   $topPercentGaivota = gaivota.dataset.top;
   $lefPercentGaivota = gaivota.dataset.left;

   $document.mousemove(function(event){

        $leftFront = $leftPercent -( ( (event.pageX / $contextWidth) * 100 ) / $speedFront);
        $topFront = $topPercent -( ( (event.pageY / $contextHeight) * 100 ) / $speedFront);

        $leftPipa = $lefPercentPipa -( ( (event.pageX / $contextWidth) * 100 ) / $speedPipa);
        $topPipa = $topPercentPipa -( ( (event.pageY / $contextHeight) * 100 ) / $speedPipa);

        $leftGaivota = $lefPercentGaivota -( ( (event.pageX / $contextWidth) * 100 ) / $speedGaivota);
        $topGaivota = $topPercentGaivota -( ( (event.pageY / $contextHeight) * 100 ) / $speedGaivota);

        imgFront.style.left = $leftFront+"%";
        imgFront.style.top = $topFront+"%";

        pipa.style.left = $leftPipa+"%";
        pipa.style.top = $topPipa+"%";

        gaivota.style.left = $leftGaivota+"%";
        gaivota.style.top = $topGaivota+"%";

   });

});