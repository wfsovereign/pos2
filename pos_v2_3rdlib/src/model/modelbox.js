/**
 * Created by fyqj on 14-10-29.
 */

function getbbox(){    // 确定购买商品种类数量
/*    return [           //存放赠送商品
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
    var bbox=[
       ];
    /*var b= {
        barcode:" ",
        name: "",
        count:0,
        price:0,
        unit:""

    };
    var counts=0;
    for(var j=0;j< a.length;j++){
        if(a[j].count>0){
            counts+=1;
        }
    }
    for (var i=0;i<counts;i++){
        bbox.push(b);
    }*/
    return bbox;
}
function getbox(/*pro,bbox*/){      //确定赠送商品种类数量
   /* return [      //存放已购买商品
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
    var box=[];
    /*var box=[ {
        barcode:" ",
        name: "",
        count:0,
        price:0,
        unit:""

    }];
    var b= {
        barcode:" ",
        name: "",
        count:0,
        price:0,
        unit:""

    };
    var counts=0;
    for (var i=0;i<pro.length;i++){
        for (var j=0;j<bbox.length;j++){
            if (bbox[j].barcode == pro[i].barcodes){
                counts+=1;
            }
        }
    }



    for (var e=1;e<counts;e++){
        box.push(b);*/

    return box;
}