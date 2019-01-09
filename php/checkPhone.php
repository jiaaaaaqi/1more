<?php
	header("content-type","text/html;charset=utf-8");
	
	//1接收数据
	$phone = $_GET["phone"];
	//2、在数据库中查询
	   //1)、建立连接，并选择数据库
	   $con = mysql_connect("localhost","root","root");
	   mysql_select_db("1more",$con);
	   //2)、执行SQL语句（查询）
	   $sqlStr="select * from user where phone='".$phone."'";
	   
	   $result=mysql_query($sqlStr,$con);
	   
	   //3)、关闭连接
	   mysql_close($con);
	//3、响应结果
	//获得$result的行数
	$rows = mysql_num_rows($result);
		
	if($rows>0){//如果手机号存在，返回0；
		echo "0";	
	}else {//如果手机号不存在，返回1.
		echo "1";
	}	
?>