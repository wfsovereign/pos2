/**
 * Created by fyqj on 14-10-29.
 */

function getbox(a){
//    return [           //存放赠送商品
//        {
//            barcode:" ",
//            name: "",
//            count:0,
//            price:0,
//            unit:""
//
//
//        },
//        {
//            barcode:"a ",
//            name: "",
//            count:0,
//            price:0,
//            unit:""
//
//
//        }
//    ];
    var box;
    for (var i=0;i<a;i++){
        box[i].barcode="";
        box[i].name="";
        box[i].count=0;
        box[i].price=0;
        box[i].unit="";
    }
}
function getbbox(a){
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
    var bbox;
    for (var i=0;i<a;i++){
        bbox[i].barcode="";
        bbox[i].name="";
        bbox[i].count=0;
        bbox[i].price=0;
        bbox[i].unit="";
    }
}