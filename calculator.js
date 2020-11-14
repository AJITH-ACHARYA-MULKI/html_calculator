var boolCheck=true;
    $(document).ready(function() {
    $(".side_access").click(function() {
        drawerCheck(boolCheck);
    });
});

function drawerCheck(bool){
boolCheck=bool;
    if (boolCheck) {
            $("#sideDrawer").addClass("sideOpen")
           $("#op_one").addClass("additional1");
           $("#op_two").addClass("additional2");
            $("#op_three").addClass("additional3");
            boolCheck = false;
        } else {
            $("#sideDrawer").removeClass("sideOpen")
            $("#op_one").removeClass("additional1");
            $("#op_two").removeClass("additional2");
            $("#op_three").removeClass("additional3");
          $("#listDisplay").html("");
            $("#fromUni").val("");
            $("#toUni").val("");
            boolCheck = true;
        }
}
var x="";
var ans;
function change(y)
{
    if (y.length==0){
    document.getElementById("out").innerHTML='0';
    }
    else{
    document.getElementById("out").innerHTML=y;
    }

}
function change1(y)
{
    ans=eval(y);
    ans=ans.toString();
    document.getElementById("out").innerHTML=ans;
    document.getElementById("his").innerHTML=y;
    x='';
}
function change2(y){
    document.getElementById("out").innerHTML='ans';
    x=ans;
}
