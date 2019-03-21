//点击登录时
$('.sub').click(function(){
    $.post('php/login.php',
        {"userphone":$("#userphone").val(),"userpass":$("#userpass").val()},
        function(data){
            // alert(data);
            if(data==1){
                // saveCookie("userphone",$("#userphone").val(),7);
                // saveCookie("userpass",$("#userpass").val(),7);
                //跳转到首页
                alert("登录成功！");
                window.location.href="longines.html";
            }else{
                // $('.error_tips').css({"display":"block"});
            }
        })
})