/**
 * Created by fyqj on 14-10-29.
 */


function goods(allitem,bbox){       //为已购买的东西赋值
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
function gift(pro,bbox,box) {        //为赠送的东西赋值
//    var box= getbox();
    var cc = 0;
    //为赠送商品到盒子赋值
    for (var ii = 0; ii < pro[0].barcodes.length; ii++) {

        for (var jj = 0; jj < bbox.length; jj++) {
            if (pro[0].barcodes[ii] == bbox[jj].barcode && bbox[jj].count != 0) {
//                console.log(cc.toString());
                box[cc].barcode = bbox[jj].barcode;
                box[cc].name = bbox[jj].name;
                box[cc].count = ( bbox[jj].count >= 2) ? (1) : (0);
                box[cc].price = bbox[jj].price;
                box[cc].unit = bbox[jj].unit;
                cc += 1;
            }
        }

    }
}