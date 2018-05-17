// // 引入mockjs
// // import Mock from 'mockjs'
// // 获取 mock.Random 对象
// // const Random = Mock.Random
//
// // mock responsJson
// let res = {
//   key: '123'
// }
//
// // get json
// // let getUrlVars = (url) => {
// //   var hash
// //   var Json = {}
// //   var hashes = url.slice(url.indexOf('?') + 1).split('&')
// //   for (var i = 0; i < hashes.length; i++) {
// //     hash = hashes[i].split('=')
// //     let val = decodeURIComponent(hash[1])
// //     Json[hash[0]] = val
// //   }
// //   return Json
// // }
//
// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/mock/orderSearch', 'post', (req) => {
//   // 请求地址 req.url
//   // 请求类型 req.type
//   // 请求主体 req.body
//   return {
//     key: res.key
//   }
// })
// Mock.mock(/\/mock\/getOrderList*/, 'get', (req) => {
//   // let query = getUrlVars(req.url)
//   let data = {
//     'code': '001',
//     'msg': '获取订单数据成功',
//     'status': 'success',
//     'data': [
//       {
//         'index': 1,
//         'orderId': 123132123,
//         'orderNumber': 2345678,
//         'bizDate': 1512473026000,
//         'status': '审核',
//         'bizType': '进口',
//         'supplier': {
//           'id': '789789798',
//           'name': '富森'
//         },
//         'logisticsStatus': '深圳发货',
//         'totalQty': '10000',
//         'remarks': '备注131231321322',
//         'isConfirmed': false,
//         'confirmAttachURL': '确认附件URL路径www.xxx.com'
//       }
//     ]
//   }
//   return data
// })
//
