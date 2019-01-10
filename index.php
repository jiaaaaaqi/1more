<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>万魔声学-首页</title>
    <link href="css/index.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/lib/jquery-1.8.1.min.js"></script>
    <style>
	.index-top { width:100%;}
	.index-top img { width:100%;}
	.index-pro { width:20%; float:left;}
	.index-pro img { width:100%;}
	
	.page_container{width: 100%; height:100%}
	.main {background: url("images/christmas.jpg") no-repeat center; height:750px;background-size: cover}
	.snow{width: 100%; height: 100%}
	.canvas_close{position: fixed;right:-70px;top: -70px;z-index: 99996;font-size:2.5rem;background: rgba(0,0,0,0.5);color: #fff;width: 150px; height: 150px;border-radius: 50% 100%;text-align: left;line-height:190px;text-indent:37px;}
    </style>
</head>
<body>
    <?php
        include "html/header.html"
    ?>
<script type="text/javascript" src="js/index/switchImage.js"></script>
<script type="text/javascript" src="js/common/header.js"></script>
<!-- <script type="text/javascript" src="js/cart.js"></script> -->
<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
    <?php
        include "html/index.html"
    ?>
    <?php
        include "html/footer.html"
    ?>
</body>
</html>