// 修改数量
//++
$(function(){
    // let num ;
    $(".addcls").click(function(){
        let count = parseInt($(this).parent().children().eq(1).val());
        count++;
        if (count>10) {
              count =10;
         }
        $(this).parent().children().eq(1).val(count)
        let price = parseInt($(this).parent().parent().next().children().eq(1).children().html());
        let sum =parseInt(count * price);
        $(this).parent().parent().nextAll().eq(1).children().eq(1).children().html(sum);
        // $(this).parent().parent().nextAll().eq(1).children().eq(1).children().html(sum);
        showTotal();
    });
//--
    // let num ;
    $(".reduceCls").click(function(){
        let count = parseInt($(this).parent().children().eq(1).val());
        count--;
        if (count<0) {
        count =0;
        }
        $(this).parent().children().eq(1).val(count)
        let price = parseInt($(this).parent().parent().next().children().eq(1).children().html());
        let sum =parseInt(count * price);
        $(this).parent().parent().nextAll().eq(1).children().eq(1).children().html(sum);
        // $(this).parent().parent().nextAll().eq(1).children().eq(1).children().html(sum);
        showTotal();
    });

//删除
$(function(){
    $(".delete").click(function(){
     let a= $(this).parent().parent().parent().parent().parent().parent();
        a.addClass("aaa")
        $(".aaa").remove();
    })
})

// 购物车数据变化
//复选框全选函数
// $(function() {

    jQuery.fn.extend({
    checkboxBind:function($subCheckbox,$unBtn){
     this.click(function(){
         //this是事件源，dom对象
         $subCheckbox.checkAll(this.checked);
     });	

     $subCheckbox.click(()=>{
         //this:事件源，所点击的复选框
         this.changeCheck($subCheckbox);
     });	
     if($unBtn){
         $unBtn.click(()=>{
             $subCheckbox.unCheck(this);
         });
     }
 },

 checkAll:function(isChecked){
     // this//jQuery对象
     this.each(function(){
         // this//jQuery对象中的每一个DOM元素
         this.checked = isChecked;
     });
 },
 unCheck:function($checkboxAll){
     this.each(function(){
         this.checked = !this.checked;
     });
     $checkboxAll.changeCheck(this);
 },
 //子控制父
 changeCheck:function($obj){
     // this
     //假定是全部选中
     let isAllCheck = true;
     for(let i=0;i<$obj.length;i++){
         if(!$obj[i].checked){
             //推翻了
             isAllCheck = false;
             break;
         }
     }
     this.attr({"checked":isAllCheck});		
}
});

$(".allchoose").checkboxBind($(".choose"));

//点击按钮改数字
//一、改数量

// $(".add").on("click",function(){
// let count = $(this).parent().children(".count").html();
// count++;
// if (count>10) {
//  count =10;
// }
// $(this).parent().children(".count").html(count);
// let price = $(this).parent().prev().children(".price").html();

// let money = price*count;
// $(this).parent().next().children(".sumMoney").html(money) ;

// showTotal();

// })
// $(".red").on("click",function(){
// let count = $(this).parent().children(".count").html();
// count--;
// if (count<0) {
//  count =0;
// }
// $(this).parent().children(".count").html(count);
//  $(this).parent().children(".count").html(count);
// let price = $(this).parent().prev().children(".price").html();

// let money = price*count;
// $(this).parent().next().children(".sumMoney").html(money) ;

// showTotal();
// })
$(".choose").on("click",function(){
showTotal();

})
$(".allchoose").on("click",function(){
showTotal();

})

function showTotal(){
var num = 0;
// $(".sumMoney").each(function(i){
 $(".choose").each(function(i){
     if($(".choose")[i].checked == true){
         num += parseInt($(".sumMoney").eq(i).html());
     }
 })

 
var totalMoney =num;

$("#totalMoney").html(totalMoney);
console.log(totalMoney);
}

}) 
