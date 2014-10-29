
/**
 * Created by fyqj on 14-10-29.
 */
/*    var count =0;
var allitem = loadAllItems();
_.each(input, function(all) {
    _.each(allitem,function(bil){
        if (all == bil.barcode){
            count+=1;
        }
        bil.barcode=count;
    })

});*/
function determine(inputs,allitem) {

//    var count =0;
//    _.each(inputs, function(all) {
//        _.each(allitem,function(bil){
//            if (all == bil.barcode){
//                count+=1;
//            }
//            bil.count=count;
//        })
//
//    });//
    for (var i = 0; i < allitem.length; i++) {
        var count = 0;

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].length == 10 && inputs[j] == allitem[i].barcode) {
                    count = count + 1;

                }

                /*   }else if (inputs[j].length>10){
                 var a;
                 a =inputs[j].split("-"[2]);
                 allitem[i].count =a[1];


                 }*/

                allitem[i].count = count;
            }

        }


    for (var e = 0; e < inputs.length; e++) {
        var abc;
        for (var u = 0; u < allitem.length; u++) {
            if (inputs[e].length > 10) {
                abc = inputs[e].split("-", [2]);
               // console.log(abc);
                if (abc[0] == allitem[u].barcode) {
                    allitem[u].count = abc[1];
                }

            }
            /*if (inputs[e].substring(11, 12) > 0 && inputs[e].substring(0, 10) == allitem[u].barcode) {
             abc = inputs[e].substring(11, 12);


             allitem[u].count = abc;
             }*/

        }
    }
}


function goods(allitem,bbox){
//    var bbox= getbbox();
    var mm=0;
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

    }
}
function gift(pro,bbox,box){
//    var box= getbox();
    var cc=0;
    //为赠送商品到盒子赋值
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

    }
}
//}
//function fruit(inputs,allitem) {
//    for (var e= 0; e < inputs.length; e++) {
//        var abc ;
//        for (var u = 0; u < allitem.length; u++) {
//            if (inputs[e].length>10){
//                abc =inputs[e].split("-",[2]);
//                allitem[u].count=abc[1];
//            }
//
//        }
//            /*if (inputs[e].substring(11, 12) > 0 && inputs[e].substring(0, 10) == allitem[u].barcode) {
//                abc = inputs[e].substring(11, 12);
//
//
//                allitem[u].count = abc;
//            }*/
//
//        }
//
//    }
