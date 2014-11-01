
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
function determine() {
    this.getbox = function() {
        var box = [];
        return box;
    };
    this.getbbox = function() {
        var bbox =[];
        return bbox;
    };

//    for (var i = 0; i < allitem.length; i++) {
//        var count = 0;
//        for (var j = 0; j < inputs.length; j++) {
//            if (inputs[j].length == 10 && inputs[j] == allitem[i].barcode) {
//                count = count + 1;
//            }
//            /* else if (inputs[j].length > 10) {
//             var a;
//             a = inputs[j].split("-"[2]);
//             if(a[0] ==allitem[i].barcode) {
//
//             allitem[i].count = a[1];
//             }*/
//        }
//        allitem[i].count = count;
//    }
//
//    for (var e = 0; e < inputs.length; e++) {
//        var abc;
//        for (var u = 0; u < allitem.length; u++) {
//            if (inputs[e].length > 10) {
//                abc = inputs[e].split("-", [2]);
//                // console.log(abc);
//                if (abc[0] == allitem[u].barcode) {
//                    allitem[u].count = abc[1];
//                }
//            }
//            }
//        }
    }

    determine.prototype.getdeter =function(inputs,allitem){
        /*for (var i = 0; i < allitem.length; i++){              //确定购买商品的数量
            var count = 0;
           for (var j = 0; j < inputs.length; j++)
            {
                if (inputs[j].length == 10 && inputs[j] == allitem[i].barcode) {
                    count = count + 1;
                }
                *//* else if (inputs[j].length > 10) {
                 var a;
                 a = inputs[j].split("-"[2]);
                 if(a[0] ==allitem[i].barcode) {

                 allitem[i].count = a[1];
                 }*//*
            }
            allitem[i].count = count;
        }*/

        _.each(allitem,function(allitem){              //确定购买商品的数量
            var count = 0;

            _.each(inputs,function(inputs){
                if (inputs.length == 10 && inputs == allitem.barcode) {
                    count = count + 1;
                }
                 else if (inputs.length > 10) {
                    var a;
                    a = inputs.split("-"[2]);
                    if (a[0] == allitem.barcode) {

                        allitem.count = a[1];
                    }
                }
            allitem.count = count;
            });
        });

//        for (var e = 0; e < inputs.length; e++)
        _.each(inputs,function(inputs){
            var abc;
//            for (var u = 0; u < allitem.length; u++) {
//                if (inputs[e].length > 10) {
//                    abc = inputs[e].split("-", [2]);
//                    // console.log(abc);
//                    if (abc[0] == allitem[u].barcode) {
//                        allitem[u].count = abc[1];
//                    }
//                }
//            }
            _.each(allitem,function(item){
                if (inputs.length > 10) {
                    abc = inputs.split("-", [2]);
                    // console.log(abc);
                    if (abc[0] == item.barcode) {
                        item.count = abc[1];
                    }
                }

            })
        })

};
    determine.prototype.getgoods =function(allitem){
        var bbox =this.getbbox();

        /*for (var i=0;i<allitem.length;i++){
            //console.log(allitem[i]);
            if (allitem[i].count>0) {

                var obj = {};

                obj.barcode = allitem[i].barcode;
                obj.count = allitem[i].count;
                obj.name = allitem[i].name;
                obj.unit = allitem[i].unit;
                obj.price = allitem[i].price;
                bbox.push(obj);
            }
            }*/

        _.each(allitem,function(allitem){
            if (allitem.count>0) {

                var obj = {};

                obj.barcode = allitem.barcode;
                obj.count = allitem.count;
                obj.name = allitem.name;
                obj.unit = allitem.unit;
                obj.price = allitem.price;
                bbox.push(obj);
            }

        });
        //console.log(bbox);
        return bbox;
    };
    determine.prototype.getgift = function(pro,bbox){
        var box =this.getbox();
        /*for (var ii = 0; ii < pro[0].barcodes.length; ii++) {

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
        var rel =pro[0].barcodes;
        _.each(rel,function(b){
        //for (var ii = 0; ii < pro[0].barcodes.length; ii++) {
            _.each(bbox,function(bbox) {

                if (b == bbox.barcode && bbox.count != 0) {
//                console.log(cc.toString());
                    var obj = {};
                    obj.barcode = bbox.barcode;
                    obj.name = bbox.name;
                    obj.count = ( bbox.count >= 2) ? (1) : (0);
                    obj.price = bbox.price;
                    obj.unit = bbox.unit;

                    box.push(obj);

                }
            })
        });
       // console.log(box)
        return box;
    };

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
