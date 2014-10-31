/**
 * Created by fyqj on 14-10-29.
 */

function getbbox(){    // 确定购买商品种类数量

    var bbox=[
       ];

    return bbox;
}
function getbox(/*pro,bbox*/){      //确定赠送商品种类数量

    var box=[];


    return box;
}
var a= [{
    price :16
},
    {
        price:12.3
    },
    {
        price:15.5
    },
    {
        price:13
    }
];
function foo(bbox){     //判断该数是否为小数，是则返回true
    return (Math.ceil(bbox.price) > bbox.price)
}
function foo1(b){
    return (Math.ceil(b) > b)
}
function math(a){               //根据传进来的数组长度通过foo（）函数判断得到为“.00”/“0”字符串数组
    var str1=[];
    for (var u=0;u<a.length;u++){
        if(foo(a[u])){
            str1[u] ="0(元)";
        }else{
            str1[u] =".00(元)";
        }
    }
    return str1;
}
var str1=[];
_.map(a,function(a){
    if (foo(a)){
        str1 ="0(元)";
    }else{
        str1 =".00(元)";
    }
    return str1
});
console.log(str1);