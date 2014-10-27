//TODO: Please write code in this file.
function printInventory(inputs) {
    var allitem = loadAllItems();
    for (var i = 0; i < allitem.length; i++) {
        var count = 0;

        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j] == allitem[i].barcode) {
               count = count+1;

            }
            allitem[i].count = count;
        }
    }
    var result =
        "***<没钱赚商店>购物清单***\n" +
        "名称：" + allitem[0].name   +
        "，数量：" + allitem[0].count +allitem[0].unit  +
        "，单价：" + allitem[0].price +
        ".00(元)，小计：" +
        (allitem[0].count * allitem[0].price) + ".00(元)\n"+
        "名称：" + allitem[1].name +  "，数量：" + allitem[1].count +allitem[1].unit +
        "，单价：" + allitem[1].price +
        ".00(元)，小计："
        + (allitem[1].count * allitem[1].price) + ".00(元)\n"+
        "名称：" + allitem[4].name +
        "，数量：" + allitem[4].count +allitem[4].unit +
        "，单价：" + allitem[4].price +
        ".00(元)，小计：" +
        + (allitem[4].count * allitem[4].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
        '**********************';
    console.log(result);

}
  /*  var box = [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00,
            count:0
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            count:0
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            count:0
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00,
            count:0
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00,
            count:0
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50,
            count:0
        }];

    for (var i=0;i<inputs.length;i++){
        for (var j=0;j<allitem.length;j++){
            if(inputs[i] == allitem[j].barcode){
                box[j].count =box[j].count+1;
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
        "名称：" + box[4].name +
        "，数量：" + box[4].count +box[4].unit +
        "，单价：" + box[4].price +
        ".00(元)，小计：" +
        + (box[4].count * box[4].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
        '**********************';
    console.log(result);*/








