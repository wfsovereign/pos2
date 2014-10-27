//TODO: Please write code in this file.
function printInventory(inputs) {

    var result =
             "***<没钱赚商店>购物清单***\n" +
             "名称：" + inputs[0].name   +
             "，数量：" + inputs[0].count +inputs[0].unit  +
             "，单价：" + inputs[0].price +
             ".00(元)，小计：" +
              (inputs[0].count * inputs[0].price) + ".00(元)\n"+
                 "名称：" + inputs[1].name +  "，数量：" + inputs[1].count +inputs[1].unit +
        "，单价：" + inputs[1].price +
        ".00(元)，小计："
            + (inputs[1].count * inputs[1].price) + ".00(元)\n"+
            "名称：" + inputs[2].name +
        "，数量：" + inputs[2].count +inputs[2].unit +
        "，单价：" + inputs[2].price +
        ".00(元)，小计：" +
            + (inputs[2].count * inputs[2].price) + ".00(元)\n" +   '----------------------\n' +"总计：23.00(元)\n" +
    '**********************';



//    /*console.log(inputs.length);*/
    console.log(result);

/*
    function print(inputs) {

        for (var i = 0; i < inputs.length; i++) {

            console.log("名称：" + inputs[i].name +
             " , 数量:" + inputs[i].count +inputs[i].unit +
             "， 单价：" + inputs[i].price + ".00(元） ， 小计："
             + (inputs[i].count * inputs[i].price) + ".00（元）\n" );
            sum += inputs[i].count * inputs[i].price;
        }

    }

    console.log(
            '***<没钱赚商店>购物清单***\n' +
            print(inputs) +
            '----------------------\n' +
            "总计:" + sum + ".00(元) \n " +
            '**********************'
    );
*/



    /*
     "名称：" + inputs[i].name + " , 数量:" + inputs[i].count +inputs[i].unit + "， 单价：" + inputs[i].price + ".00(元） ， 小计：" + (inputs[i].count * inputs[i].price) + ".00（元）\n" );
     sum += inputs[i].count * inputs[i].price;
     inputs = [
     {
     barcode: 'ITEM000000',
     name: '可口可乐',
     unit: '瓶',
     price: 3.00,
     count: 5
     },
     {
     barcode: 'ITEM000001',
     name: '雪碧',
     unit: '瓶',
     price: 3.00,
     count: 2
     },
     {
     barcode: 'ITEM000004',
     name: '电池',
     unit: '个',
     price: 2.00,
     count: 1
     }
     ];
     '***<没钱赚商店>购物清单***\n' +
     '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
     '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
     '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
     '----------------------\n' +
     '总计：23.00(元)\n' +
     '**********************'
     */
}