const md5 = require('/md5.js')

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * map转json
 * 参数签名后
 * @map map数组
 * @returns {Json}
 */
function signature(map) {
  var json = {};
  map.forEach(function (value, key) {
    json[key] = value;
  })
  let myJson = JSON.stringify(json);
  myJson = valueReverse(myJson);
  json['signature'] = md5.hexMD5(myJson);
  return json;
}

/**
 * map转json
 * @map map数组
 * @returns {Json}
 */
function map2Json(map) {
  map.set('hospital', 1118);
  map.set('deptName', '测试部门');
  var json = {};
  map.forEach(function (value, key) {
    json[key] = value;
  })
  return json;
}

/**
 * 反向字符串拼接
 * @param json
 * @returns {string}
 */
function valueReverse(json) {
  let arrays = "myistest0000";
  json = JSON.parse(json);
  for (var key in json) {
    arrays += "," + key;
  }
  if (arrays == "myistest0000") {
    return;
  }
  let array = arrays.split(",");
  array.sort().reverse();
  var jsonStr = "";
  for (var i in array) {
    if (array[i] == "myistest0000") {
      continue;
    }

    jsonStr += json[array[i]];
  }
  return jsonStr;
}


module.exports = {
  formatTime: formatTime,
  signature,
  map2Json,
  valueReverse
}