/**
 * Created by fyqj on 14-10-29.
 */


function goods(allitem,bbox){       //向生成的已购买商品种类赋值

     for (var i=0;i<allitem.length;i++){
         //console.log(allitem[i]);
        if (allitem[i].count>0){

            var obj ={};

            obj.barcode=allitem[i].barcode;
            obj.count=allitem[i].count;
            obj.name=allitem[i].name;
            obj.unit=allitem[i].unit;
            obj.price=allitem[i].price;
            bbox.push(obj);

        }
   }

   /* for (var sm=0;sm<allitem.length;sm++){

        //   console.log(allitem[sm].count.toString());
        if(allitem[sm].count > 0){
//            console.log(mm.toString())
//
//          console.log(allitem[sm].count.toString());
//            console.log(allitem[sm].name)

            bbox[mm].barcode =allitem[sm].barcode;
            bbox[mm].count =allitem[sm].count;
            bbox[mm].price =allitem[sm].price;
            bbox[mm].name =allitem[sm].name;
            bbox[mm].unit =allitem[sm].unit;
            console.log(bbox[mm].name)
            console.log(bbox[mm])
            mm= mm+1;
        }

    }*/

}
function gift(pro,bbox,box) {        //为赠送的东西赋值
//    var box= getbox();

    //为赠送商品到盒子赋值
    for (var ii = 0; ii < pro[0].barcodes.length; ii++) {

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

    }
}