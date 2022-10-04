var user = [];
var loadUser = function(){
    user = JSON.parse(localStorage.getItem('llistUser'))
}
//if (localStorage.getItem("listUser")!=null){
    loadUser();
//}
function validate1(){
    var uu = document.getElementById("username1").value;
    var pu1 = document.getElementById("password1").value;
    if (uu==""){
        alert("Vui lòng nhập tên!");
        return false;
    }
    if (pu1==""){
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    
    var k=0;
    for (var i in user){
        k++;
        var data = JSON.parse(JSON.stringify(user[i]))
        if (
            ((uu== data.username)&&(pu1==data.password)&&(data.role=="admin"))){
            alert("Đăng nhập thành công!");
            location.assign("http://127.0.0.1:5500/BT4.2.html");
            return true;
        }
        if (
            ((uu== data.username)&&(pu1==data.password)&&(data.role=="user"))){
            alert("Đăng nhập thành công!");
            k=i;
            window.location.href= "http://127.0.0.1:5500/index.html";
            return true;
        }
        
    }
    if (k===user.length){
        alert("Bạn đăng nhập sai rồi!")
        document.getElementById("username1").value="";
        document.getElementById("password1").value="";
        return true;
    }

}
