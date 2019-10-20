export class ArrUtil {
  //查并除重
  static clearRepeat (arr) {
    return arr.filter(function (item, index, arr) { return arr.indexOf(item) === index && item.trim() !== ''; });
  };
  //分化
  static splitArr (data, senArrLen) {
    //处理成len个一组的数据
    var data_len = data.length;
    var arrOuter_len = data_len % senArrLen === 0 ? data_len / senArrLen : parseInt((data_len / senArrLen) + '') + 1;
    var arrSec_len = data_len > senArrLen ? senArrLen : data_len; //内层数组的长度
    var arrOuter = new Array(arrOuter_len); //最外层数组
    var arrOuter_index = 0; //外层数组的子元素下标
    // console.log(data_len % len);
    for (var i = 0; i < data_len; i++) {
      if (i % senArrLen === 0) {
        arrOuter_index++;
        var len = arrSec_len * arrOuter_index;
        //将内层数组的长度最小取决于数据长度对len取余，平时最内层由下面赋值决定
        arrOuter[arrOuter_index - 1] = new Array(data_len % senArrLen);
        if (arrOuter_index === arrOuter_len) //最后一组
          data_len % senArrLen === 0 ?
            len = data_len % senArrLen + senArrLen * arrOuter_index :
            len = data_len % senArrLen + senArrLen * (arrOuter_index - 1);
        var arrSec_index = 0; //第二层数组的索引
        for (var k = i; k < len; k++) { //第一层数组的开始取决于第二层数组长度*当前第一层的索引
          arrOuter[arrOuter_index - 1][arrSec_index] = data[k];
          arrSec_index++;
        }
      }
    }
    return arrOuter;
  };
}
