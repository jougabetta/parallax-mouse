<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Hello!</title>
</head>

<style>
*{margin:0; padding:0;}
img#back{min-width:100%;}
img#front{position:absolute; top:40%; left:30%;}
.imgs{position:absolute; z-index:500;}
#pipa{top:20%; left:70%;}
#gaivota{top:15%; left:20%;}
</style>

<body>

<div>
    <img id="back" data-speed="5" src="Desert.jpg" />
    <img id="front" data-speed="3" data-top="40" data-left="30" src="asa.gif" />
    <img id="pipa" class="imgs" data-speed="40" data-top="20" data-left="70" width="50" src="pipa.png" />
    <img id="gaivota" class="imgs" data-speed="100" data-top="15" data-left="20" width="50" src="gaivota.png" />
</div>



</body>

<script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script src="functions.js"></script>

</html>
