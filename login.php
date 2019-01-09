<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>万魔声学-会员登录</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="../../js/lib/jquery-1.8.1.min.js"></script>
    <style>
        .loginBtn {
            width:367px; height:55px; background:#F63B21;
            text-align:center; line-height:55px;
            font-size:18px; color:#fff; outline:none;border:none;
            cursor:pointer;font-family:'Microsoft Yahei';
        }
        input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
            background-color: rgb(250, 255, 189) !important;
            background-image: none !important;
            color: rgb(0, 0, 0) !important;
        }
    </style>
</head>
<body>
    <?php
        include "html/header.html"
    ?>   
    <?php
        include "html/login.html"
    ?> 
    <?php
        include "html/footer.html"
    ?>
</body>
</html>