/**
 * Created by fyqj on 14-10-29.
 */
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
function math1(a){           //根据传进来的数组长度通过foo（）函数判断得到为“.00”/“0”字符串
    var str1="";
    for (var u=0;u<a.length;u++){
        if(foo(a)){
            str1 ="0(元)";
        }else{
            str1 =".00(元)";
        }
    }
    return str1;
}
function math2(a){          //根据传进来的数通过foo（）函数判断得到为“.00”/“0”字符串
    var str1;
    if(foo1(a)){
        str1 ="0(元)";
    }else{
        str1 =".00(元)";
    }
    return str1;
}
function math3(a){      //根据传进来的数组长度，得到其累加的值
    var s=0;
    for(var i=0;i< a.length;i++){
        s= s+a[i];
    }
    return s;
}
function prints(box,bbox){      //打印函数
    var now= moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");
     //格式化输出
    var str="" ;//购买商品字符
    var smallsum =[];
    var m= 0;

    for (var j=0;j<bbox.length;j++){                   //得出已购买商品的小计
        if(bbox[j].barcode == box[m].barcode){          //如果是优惠商品则减去优惠商品的单价
            smallsum[j] = bbox[j].count*bbox[j].price-box[m].price;

            m++;

        }else{
            smallsum[j] = bbox[j].count*bbox[j].price;
        }
    }

    var str1=[];
    str1=math(bbox);
    /*for (var u=0;u<bbox.length;u++){//得出商品的.00或者0
        if(Math.ceil(bbox[u].price)>bbox[u].price){
            str1[u] ="0(元)";
        }else{
            str1[u] =".00(元)";
        }
    }*/
    //console.log(str1);
    var str2=[];
    var sum=0;
    sum =math3(smallsum);
    str2 =math(smallsum);
   /* for (var t=0;t<smallsum.length;t++){                //得出.00或者0
        if(Math.ceil(smallsum[t])>smallsum[t]){
            str2[t] ="0(元)";
        }else{
            str2[t] =".00(元)";
        }
        sum =sum + smallsum[t];
    }*/
    var str5=""; //总计
    str5 =math2(sum);
        /*if(Math.ceil(sum)>sum){
            str5 ="0(元)";
        }else{
            str5 =".00(元)";
        }*/
    for (var i=0;i<bbox.length;i++){
        str=str+"名称：" + bbox[i].name   +
        "，数量：" + bbox[i].count +bbox[i].unit  +
        "，单价：" + bbox[i].price +str1[i]+
        "，小计：" +
        smallsum[i] + str2[i]+"\n"
    }
    var str4="";        //赠送商品字符
    var str3="";        //节省钱的.00
    for (var p=0;p<box.length;p++){
        str4=str4+"名称：" + box[p].name   +
            "，数量：" + box[p].count +box[p].unit+"\n"
    }
    var save=0;
    for (var q=0;q<box.length;q++){
        save =save+box[q].price;
    }
    str3 = math2(save);
    /*if(Math.ceil(save)>save){
        str3 ="0(元)";
    }else{
        str3 =".00(元)";
    }*/
    console.log(
            "***<没钱赚商店>购物清单***\n" +
        '打印时间：' + now+ '\n' +
        '----------------------\n'
                +str

                +   '----------------------\n'+'挥泪赠送商品：\n' +

                str4+
        '----------------------\n' +
        '总计：'+sum+str5+'\n' +
        '节省：'+save+str3+'\n' +
        '**********************')
}