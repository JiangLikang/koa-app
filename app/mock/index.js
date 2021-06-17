const Mock = require('mockjs')
const { scmTest } = require('../schema/index');

const apiList = [
  {
    method: 'get',
    path: '/a',
    // valid: scmTest.list,
    data: new Array(28).fill({
      activityName: '今天吃什么呢',
      presaleTime: '2021-6-16',
      deliveryTime: '2021-6-16',
    })
  }
]

module.exports = apiList