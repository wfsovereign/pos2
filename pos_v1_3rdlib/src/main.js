//TODO: Please write code in this file.
function printInventory (inputs) {
    var allitem = loadAllItems();
    var pro = loadPromotions();


    var box, bbox;
    var item = new determine();
    item.getdeter(inputs, allitem);
    bbox = item.getgoods(allitem);
    box = item.getgift(pro, bbox);

    prints(box, bbox);
}

  /*  var box=[           //存放赠送商品
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
    ];
    var bbox=[      //存放已购买商品
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
    ];
    //将所有购买到商品添加购买数量，没有则为零
    for (var i = 0; i < allitem.length; i++) {
        var count = 0;

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j] == allitem[i].barcode) {
                count = count + 1;

            }
            allitem[i].count = count;

        }

    }


    //设置水果类数量
    for (var e= 0; e < inputs.length; e++) {
        var abc = 0;
        for (var u = 0; u < allitem.length; u++) {
            if (inputs[e].substring(11, 12) > 0 && inputs[e].substring(0, 10) == allitem[u].barcode) {
                abc = inputs[e].substring(11, 12);


                allitem[u].count = abc;
            }

        }

    }
    var mm=0;
    for (var sm=0;sm<allitem.length;sm++){

        if(allitem[sm].count != 0){
            bbox[mm].barcode =allitem[sm].barcode;
            bbox[mm].count =allitem[sm].count;
            bbox[mm].price =allitem[sm].price;
            bbox[mm].name =allitem[sm].name;
            bbox[mm].unit =allitem[sm].unit;
            mm= mm+1;
        }

    }


    var cc=0;
    //为赠送商品到盒子赋值
    for (var ii=0;ii<promotion[0].barcodes.length;ii++){

        for (var jj=0;jj<bbox.length;jj++){
            if( promotion[0].barcodes[ii] == bbox[jj].barcode && bbox[jj].count != 0){
//                console.log(cc.toString());
                box[cc].barcode = bbox[jj].barcode;
                box[cc].name = bbox[jj].name;
                box[cc].count =( bbox[jj].count>=2)?(1):(0);
                box[cc].price = bbox[jj].price;
                box[cc].unit = bbox[jj].unit;
                cc+=1;
            }
        }

    }






    var result =
        "***<没钱赚商店>购物清单***\n" +
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
        '**********************';
    console.log(result);
*/

