<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>万魔声学-会员登录</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="js/lib/jquery-1.8.1.min.js"></script>
    <script src="js/login/login.js"></script>
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
    <?php include "html/header.html" ?>   
    <div class="content_login">
        <div class="content_login1">
            <form id="from1" method="post" action="login.php" class="submitForm">
                <div id="normalLogin">
                    <div class="content_login3">
                        <input name="vipName" id="strLoginName" type="text"  placeholder="用户名" maxLength="20"/>
                    </div>
                    <div class="content_login3">
                    <input name="strPassword" id="strPassword" type="password"  placeholder="密码" maxLength="16"/>
                    </div>
                </div>
                <div class="content_login6">
                <div class="content_login6_3">
                    <a href="##">忘记密码?</a>
                </div>
            </div>
            <script src="js/tools/cookieTools.js"></script>
            <div class="content_login4">
                <input name="" type="button" value="登&nbsp;录" class="loginBtn" id="loginBtn" />
            </div>
            </form>
            <div class="content_login5">
                <div class="content_login5_1">
                    <a href="javascript:void(0)" id="toRegister" >立即注册</a>
                </div>
                <div class="content_login5_2">
                    没有1More帐号？
                </div>
            </div>
        </div> 
    </div>
    <?php
        include "html/footer.html"
    ?>
</body>
</html>