
//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', function(req, res) {
  return {
    name: ['a','b']
  }
})
