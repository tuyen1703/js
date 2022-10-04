var user = [
    {
        id: "USER1",
        username:"admin",
        email: "dung123@gmail.com",
        password:"12345678",
        role:"admin"
    },
    {
        id: "USER2",
        username:"user",
        email: "thaouyen1733@gmail.com",
        password:"thaouyen1733",
        role:"user"
    }
];

    //đẩy mảng vào local
var saveUser = function(){
    localStorage.setItem('llistUser',JSON.stringify(user))
}
    //lấy list user
var loadUser = function(){
    user = JSON.parse(localStorage.getItem('llistUser'))
}
if (localStorage.getItem("llistUser")!=null){
    loadUser();
}
saveUser();
function validate(){
    var u = document.getElementById("username").value;
    var m = document.getElementById("mail").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password-repeat").value;

    if (u==""){
        alert("Vui lòng nhập tên!");
        return false;
    }
    if ((p1=="")||(p1.length<8)){
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    if (p2==""){
        alert("Vui lòng xác minh mật khẩu!");
        return false;
    }
    if ((u!="")&&(p1==p2)){
        var k=0;
        for (var i in user){
            var data = JSON.parse(JSON.stringify(user[i]))
            if (u === data.username){k++;break;}
        }
        if (k!=0){alert("Tài khoản đã tồn tại!");
        window.location.reload();
        return false; 
        } else {
            var User = {
                id: "USER"+parseInt(user.length+1),
                username: u,
                password: p1,
                email: m,
                role: "user",
            }
            user.push(User);
            localStorage.setItem('llistUser',JSON.stringify(user));
            alert("Đăng kí thành công!");
            location.assign("http://127.0.0.1:5500/login.html");
            return true;
        }
    }
}