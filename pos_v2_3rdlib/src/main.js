//TODO: Please write code in this file.
function printInventory(inputs) {
    var allitem = loadAllItems();
    var pro = loadPromotions();
    //var rel =pro[0].barcodes;

    var box, bbox;
    var item = new determine();
    item.getdeter(inputs, allitem);
    bbox = item.getgoods(allitem);
    box = item.getgift(pro, bbox);
    prints(box, bbox);
}


 /*   function foo(bbox) {     //判断该数是否为小数，是则返回true
        return (Math.ceil(bbox.price) > bbox.price);
    }
    var a=[

        {
            barcode:" ",
            name: "",
            count:0,
            price:4,
            unit:""

        }, {
            barcode:" ",
            name: "",
            count:0,
            price:6.3,
            unit:""


        }, {
            barcode:" ",
            name: "",
            count:0,
            price:9.5,
            unit:""


        }

    ];
    function math2 (a){
        var pos = _.map(a,function(num){
            if (foo(num)) {
                return "0(元)";
            } else {
                return ".00(元)";


            }
        })
        return pos
    }

    var b=math2(a);
    console.log(b);

}
*/

//    box=[];
//    var rel =pro[0].barcodes;
//    console.log(rel)
//    _.each(rel,function(b){
//     //for (var ii = 0; ii < pro[0].barcodes.length; ii++) {
//     _.each(bbox,function(bbox) {
//     //console.log(b)
//     if (b == bbox.barcode && bbox.count != 0) {
//     //                console.log(cc.toString());
//     var obj = {};
//     obj.barcode = bbox.barcode;
//     obj.name = bbox.name;
//     obj.count = ( bbox.count >= 2) ? (1) : (0);
//     obj.price = bbox.price;
//     obj.unit = bbox.unit;
//
//     box.push(obj);
//
//     }
//     })
//     });
/*    for (var ii = 0; ii < pro[0].barcodes.length; ii++) {

        for (var jj = 0; jj < bbox.length; jj++) {
            if (pro[0].barcodes[ii] == bbox[jj].barcode && bbox[jj].count != 0) {
//                console.log(cc.toString());
                var obj ={};
                obj.barcode = bbox[jj].barcode;
                obj.name = bbox[jj].name;
                obj.count = ( bbox[jj].count >= 2) ? (1) : (0);
                obj.price = bbox[jj].price;
                obj.unit = bbox[jj].unit;

                box.push(obj);            }
        }

    }*/
//    var a= [1,2,3,4,5];
//    var count =0;
//    _.each(a,function(b){
//        count+=1;
//        console.log(b);
//    });
//    console.log(count.toString());




    //console.log(box)





    /*var a=[
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00,
            count:1
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count:3
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count:2
        }];
    var str="";
    str = _.each(a,function(num){
        str=str+"名称：" + num.name   +
        "，数量：" + num.count +num.unit+"\n"
    });
   // console.log(str);
    var b=[1,2,3,4,5];
    var c=0;
    c = _.reduce(a,function(memo,num){
        return memo+"名称：" + num.name   +
        "，数量：" + num.count +num.unit+"\n"
    },"");*/
    //console.log(c);
 /*   for (var j=0;j<bbox.length;j++){                   //得出已购买商品的小计
        if(bbox[j].barcode == box[m].barcode){          //如果是优惠商品则减去优惠商品的单价
            smallsum[j] = bbox[j].count*bbox[j].price-box[m].price;

            m++;

        }else{
            smallsum[j] = bbox[j].count*bbox[j].price;
        }
    }*/








   //console.log(str1)


    // goods(allitem,bbox);
    // gift(pro,bbox,box);

    //   var box=getbox();
//   var bbox=getbbox();
     //存放赠送商品
   /* [
        {
            barcode:" ",
            name: "",
            count:0,
            price:0,
            unit:""


        },
        {
            barcode:"a ",
            name: "",
            count:0,
            price:0,
            unit:""


        }
    ];*/

      //存放已购买商品
   /* [
        {
            barcode:" ",
            name: "",
            count:0,
            price:0,
            unit:""

        }, {
            barcode:" ",
            name: "",
            count:0,
            price:0,
            unit:""


        }, {
            barcode:" ",
            name: "",
            count:0,
            price:0,
            unit:""


        }
    ];*/
    //将所有购买到商品添加购买数量，没有则为零
  /*  for (var i = 0; i < allitem.length; i++) {
        var count = 0;

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j] == allitem[i].barcode) {
                count = count + 1;

            }
            allitem[i].count = count;

        }

    }*/


   // fruit(inputs,allitem);
//    _.each(inputs, function(all) {
//        _.each(allitem,function(bil){
//            if (all == bil.barcode){
//                count+=1;
//            }
//            bil.barcode=count;
//        })
//
//    });

   // var box= getbox(pro,bbox);

// 设置水果类数量
/*    for (var e= 0; e < inputs.length; e++) {   //最终方法
        var abc;
        for (var u = 0; u < allitem.length; u++) {
            if (inputs[e].length > 10) {
                abc = inputs[e].split("-", [2]);
                //console.log(abc);
                if (abc[0] == allitem[u].barcode) {
                    allitem[u].count = abc[1];
                }

            }
           */
    /* if (inputs[e].substring(11, 12) > 0 && inputs[e].substring(0, 10) == allitem[u].barcode) {   //单一方法
                abc = inputs[e].substring(11, 12);


                allitem[u].count = abc;
            }*/


  /*      }

    }*/
  // console.log('lizhi   '+allitem[3].count);
  /*  var mm=0;
    for (var sm=0;sm<allitem.length;sm++){

        //   console.log(allitem[sm].count.toString());
        if(allitem[sm].count != 0){
            //  console.log(allitem[sm].count.toString());
            bbox[mm].barcode =allitem[sm].barcode;
            bbox[mm].count =allitem[sm].count;
            bbox[mm].price =allitem[sm].price;
            bbox[mm].name =allitem[sm].name;
            bbox[mm].unit =allitem[sm].unit;
            mm= mm+1;
        }

    }*/

   // console.log(bbox);
  // console.log(bbox);
  /*  //console.log(mm.toString());
    // console.log(allitem);
    // console.log(bbox);
   // gift(pro,bbox);*/
    //console.log(bbox)

    //为赠送商品到盒子赋值
   /* var cc=0;

    for (var ii=0;ii<pro[0].barcodes.length;ii++){

        for (var jj=0;jj<bbox.length;jj++){
            if( pro[0].barcodes[ii] == bbox[jj].barcode && bbox[jj].count != 0){
//                console.log(cc.toString());
                box[cc].barcode = bbox[jj].barcode;
                box[cc].name = bbox[jj].name;
                box[cc].count =( bbox[jj].count>=2)?(1):(0);
                box[cc].price = bbox[jj].price;
                box[cc].unit = bbox[jj].unit;
                cc+=1;
            }
        }

    }*/

   /* var result =
        "***<没钱赚商店>购物清单***\n" +
        '打印时间：' + formattedDateString + '\n' +
        '----------------------\n' +
        "名称：" + bbox[0].name   +
        "，数量：" + bbox[0].count +bbox[0].unit  +
        "，单价：" + bbox[0].price +
        ".00(元)，小计：" +
        (bbox[0].count * bbox[0].price-box[0].price) + ".00(元)\n"+
        "名称：" + bbox[1].name +  "，数量：" + bbox[1].count +bbox[1].unit +
        "，单价：" + bbox[1].price +
        ".00(元)，小计："
        + (bbox[1].count * bbox[1].price) + ".00(元)\n"+
        "名称：" + bbox[2].name +
        "，数量：" + bbox[2].count +bbox[2].unit +
        "，单价：" + bbox[2].price +
        "0(元)，小计：" +
        + (bbox[2].count * bbox[2].price-box[1].price) + ".00(元)\n" +   '----------------------\n'+'挥泪赠送商品：\n' +
        "名称：" + box[0].name   +
        "，数量：" + box[0].count +box[0].unit+"\n"+
        "名称：" + box[1].name   +
        "，数量：" + box[1].count +box[1].unit+"\n"+
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：'+(box[0].price+box[1].price)+'0(元)\n' +
        '**********************';*/
   //console.log(result);
