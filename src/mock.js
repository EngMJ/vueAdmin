// 引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
// const Random = Mock.Random

// mock responsJson
let res = {
  key: '123'
}

// get json
let getUrlVars = (url) => {
  var hash
  var Json = {}
  var hashes = url.slice(url.indexOf('?') + 1).split('&')
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=')
    Json[hash[0]] = hash[1]
  }
  return Json
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/mock/orderSearch', 'post', (req) => {
  // 请求地址 req.url
  // 请求类型 req.type
  // 请求主体 req.body
  return {
    key: res.key
  }
})
Mock.mock(/\/mock\/getData*/, 'get', (req) => {
  let query = getUrlVars(req.url)
  return query
})
