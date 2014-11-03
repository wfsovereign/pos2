/**
 * Created by fyqj on 14-11-1.
 */
function determine() {
    this.getbox = function() {
        var box = [];
        return box;
    };
    this.getbbox = function() {
        var bbox =[];
        return bbox;
    };
}

determine.prototype.getdeter =function(inputs,allitem){
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

    _.each(inputs,function(inputs){
        var abc;

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
    return bbox;
};

determine.prototype.getgift = function(pro,bbox){
    var box =this.getbox();

    var rel =pro[0].barcodes;
    _.each(rel,function(b){

        _.each(bbox,function(bbox) {

            if (b == bbox.barcode && bbox.count != 0) {
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
    return box;
};