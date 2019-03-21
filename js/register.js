

//点击提交时
$("#btnReg").click(function(){
	var flag = true;
	$('input').each(function(i,obj){
		
        $.post("php/regSave.php",
            {"username":$("#username").val(),"userphone":$('#userphone').val(),"userpass":$("#userpass").val()},
            function(data){
                // alert(data);
                if(data == 1){
                    // saveCookie("username",$("#username").val(),7);
                    // saveCookie("userpass",$("#password").val(),7);
                    // saveCookie("userphone",$("#userphone").val(),7);
                    alert("注册成功！");
                    window.location.href="longin.html";
                }else{
                    // alert("注册失败！");
                }
                
            }
        )
		
			
	})
})