/**
 * Created by fyqj on 14-10-29.
 */
function prints(box,bbox){      //打印函数
    var now= moment().format('YYYY年MM月DD日'+" "+"HH:mm:ss");
     //格式化输出


    console.log(
            "***<没钱赚商店>购物清单***\n" +
        '打印时间：' + now+ '\n' +
        '----------------------\n' +
        "名称：" + bbox[0].name   +
        "，数量：" + bbox[0].count +bbox[0].unit  +
        "，单价：" + bbox[0].price +
        ".00(元)，小计：" +
        (bbox[0].count * bbox[0].price-box[0].price) + ".00(元)\n"+
        "名称：" + bbox[1].name +  "，数量：" + bbox[1].count +bbox[1].unit +
        "，单价：" + bbox[1].price +
        ".00(元)，小计："
        + (bbox[1].count * bbox[1].price) + ".00(元)\n"+
        "名称：" + bbox[2].name +
        "，数量：" + bbox[2].count +bbox[2].unit +
        "，单价：" + bbox[2].price +
        "0(元)，小计：" +
        + (bbox[2].count * bbox[2].price-box[1].price) + ".00(元)\n" +   '----------------------\n'+'挥泪赠送商品：\n' +
        "名称：" + box[0].name   +
        "，数量：" + box[0].count +box[0].unit+"\n"+
        "名称：" + box[1].name   +
        "，数量：" + box[1].count +box[1].unit+"\n"+
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：'+(box[0].price+box[1].price)+'0(元)\n' +
        '**********************')
}