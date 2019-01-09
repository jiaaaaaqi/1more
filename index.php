<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>万魔声学-首页</title>
    <link href="css/index.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script src="js/lib/jquery-1.8.1.min.js" type="text/javascript" ></script>
    <style>   
        .videobox{position: fixed;width: 960px;height:580px; z-index: 10000;left: 50%;margin-left: -480px;top: 50%;margin-top: -290px;}
            .video_title{background: #fff; height: 50px; line-height: 50px; padding:0 15px;font-size: 16px;}
            .video_title span.video_close{float: right;font-size:32px; color: #999;line-height: 46px; cursor: pointer}
            .video_title span.video_close:hover{color: #5c5c5c}
            .video_ih{position: fixed; left:0;top: 0;right: 0;bottom: 0;background:rgba(0,0,0,0.5); z-index: 9999}
    </style>
</head>
<body>
    <?php
        include "html/header.html"
    ?>
    <?php
        include "html/index.html"
    ?>
    <?php
        include "html/footer.html"
    ?>
</body>
</html>