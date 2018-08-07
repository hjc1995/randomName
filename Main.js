// 保存已经注册的名称（缓存代替数据库）
const nameList = require('./Cache');

/**
 * 注册名称
 */
function registe() {
   let name = randomName();
   do {
      name = randomName();
   } while (nameList.indexOf(name) != -1)
   nameList.push(name);
}

/**
 * 单次获取随机名称
 */
function randomName() {
   let name = '';
   for (let i = 0; i < 2; i++) {
      name += String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0));
   }
   for (let i = 0; i < 4; i++) {
      name += Math.floor(Math.random() * 10) + "";
   }
   return name;
}

/**
 * 数组中是否有重复元素
 */
function isRepeat() {
   let s = nameList.join(",") + ",";
   for (let i = 0; i < nameList.length; i++) {
      if (s.replace(nameList[i] + ",", "").indexOf(nameList[i] + ",") > -1) {
         console.log("数组中有重复元素：" + nameList[i]);
         break;
      }
   }
   console.log("数组中没有重复元素。");
}

// 10000次注册模拟
console.time("registe");
for (let i = 0; i < 10000; i++) {
   registe();
}
console.timeEnd("registe");

// 测试是否有冲突
// console.log(nameList);
isRepeat();

