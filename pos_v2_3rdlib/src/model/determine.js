
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
function determine(inputs,allitem) {        //确定购买商品的数量

    /*//    var count =0;
     //    _.each(inputs, function(all) {
     //        _.each(allitem,function(bil){
     //            if (all == bil.barcode){
     //                count+=1;
     //            }
     //            bil.count=count;
     //        })
     //
     //    });*/
    // console.log(allitem[1].barcode)
    for (var i = 0; i < allitem.length; i++) {
        var count = 0;
        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].length == 10 && inputs[j] == allitem[i].barcode) {
                count = count + 1;

            }
            /* else if (inputs[j].length > 10) {
             var a;
             a = inputs[j].split("-"[2]);
             if(a[0] ==allitem[i].barcode) {

             allitem[i].count = a[1];
             }*/
        }
        allitem[i].count = count;
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
            if (inputs[e].substring(11, 12) > 0 && inputs[e].substring(0, 10) == allitem[u].barcode) {        //笨办法，不适宜
                abc = inputs[e].substring(11, 12);


                //allitem[u].count = abc;
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
