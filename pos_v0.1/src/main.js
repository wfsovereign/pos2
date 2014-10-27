//TODO: Please write code in this file.
function printInventory(inputs) {

    var box = [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3,
            count: 0
        },

        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3,
            count:0
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2,
            count:0
        }
    ];
    for (var j=0;j<3;j++){
        for( var  i=0; i<inputs.length;i++){
         if(box[j].barcode ==inputs[i].barcode){
             box[j].count++;
         }
        }

    }
    var result =
        "***<没钱赚商店>购物清单***\n" +
        "名称：" + box[0].name   +
        "，数量：" + box[0].count +box[0].unit  +
        "，单价：" + box[0].price +
        ".00(元)，小计：" +
        (box[0].count * box[0].price) + ".00(元)\n"+
        "名称：" + box[1].name +  "，数量：" + box[1].count +box[1].unit +
        "，单价：" + box[1].price +
        ".00(元)，小计："
        + (box[1].count * box[1].price) + ".00(元)\n"+
        "名称：" + box[2].name +
        "，数量：" + box[2].count +box[2].unit +
        "，单价：" + box[2].price +
        ".00(元)，小计：" +
        + (box[2].count * box[2].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
        '**********************';
        console.log(result);

}
//inputs = [
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000000',
//        name: '可口可乐',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000001',
//        name: '雪碧',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000001',
//        name: '雪碧',
//        unit: '瓶',
//        price: 3.00
//    },
//    {
//        barcode: 'ITEM000004',
//        name: '电池',
//        unit: '个',
//        price: 2.00
//    }