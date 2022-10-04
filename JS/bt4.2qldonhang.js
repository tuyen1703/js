var product = [];
function Save() {
    localStorage.setItem('listProduct',JSON.stringify(product))
}
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
if (localStorage.getItem("listProduct") != null) {
    load();
}
var productAdmin = function() {
    var listproduct1 = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct1 = '<tr>';
        listproduct1 += '<td>' + data.id + '</td>';
        listproduct1 += '<td>' + data.name + '</td>';
        listproduct1 += `<td ><img src="${data.img}" alt="#" width="50px" height="50px" /></td>`;
        listproduct1 += '<td>' + data.price + '</td>';
        listproduct1 += '<td><button onclick="updateProduct('+i+')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listproduct1 += '<button onclick="deleteProduct('+i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct1 += '</tr>';
        document.getElementById("product-admin").innerHTML += listproduct1;
    }
    //Save();
}
    //thêm sản phẩm
    function addProduct(){
        var NProduct = {
            id :"SP"+ parseInt(product.length + 1),
            name : document.getElementById("iName").value,
            img : document.getElementById("iImg").value,
            price :document.getElementById("iPrice").value,
        };
        product.push(NProduct);
        localStorage.setItem('listProduct',JSON.stringify(product))
        productAdmin()
        window.location.reload();
    }
    //sửa sản phẩm
    var updateProduct= function(i){
        var k = product[i];
        document.getElementById("idd").value = k.id;
        document.getElementById("named").value = k.name;
        document.getElementById("imgd").value = k.img;
        document.getElementById("priced").value = k.price;
        document.getElementById("idd").setAttribute("disable","disabled");
        document.getElementById("submitUpdate").innerHTML = '<button class = "btn btn-danger mt-3" onclick="submitUpdate('+i+')">Đồng ý</button>';
    }
    var submitUpdate = function(i){
        var k = product[i];
        k.id= document.getElementById("idd").value;
        k.name= document.getElementById("named").value;
        k.img= document.getElementById("imgd").value;
        k.price= document.getElementById("priced").value;
        localStorage.setItem('listProduct',JSON.stringify(product));
        window.location.reload();
    }
    //xóa sản phẩm
    var deleteProduct = function(i){
        product.splice(i,1);
        localStorage.setItem('listProduct',JSON.stringify(product));
        window.location.reload();
    }

productAdmin()