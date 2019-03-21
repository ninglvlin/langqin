<?php
 header("Content-type:text/html;charset=utf-8");

 $Uphone=$_GET['myphone'];
 $password=$_GET['passw'];
 $username=$_GET['username'];

//处理
if(($Uphone!="")&&($password!="")){
	//建立连接
	 $conn=mysql_connect("localhost","root","root");
	 if(!$conn){
	 	die("连接失败");

	 }
	//选择数据库
	 mysql_select_db("longines",$conn);

	 //执行sql语句

	 // 1.查询
	 $sqlstr="select * from userinfo where userphone='$Uphone'";
	 $result=mysql_query($sqlstr,$conn);
	 if($result)>0){
	 	mysql_close($conn);//先处理完后端程序
	 	echo "2";
	 }else{
	 	$sqlstr="insert into userinfo values('$username','$password','$Uphone')";
	 	$result=mysql_query($sqlstr,$conn);

	 	//关闭数据库
	 	mysql_close($conn);

	 	//响应
	 	if($result==1){
	 		echo "1";

	 	}else{
	 		echo "0";
	 	}

	 }


}else{
	echo"3";
}
 
?>
