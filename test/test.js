const expect = require('expect.js')
const utils = require('../dist/index.js')
describe('单元测试', function() {
  describe('getUrlParams test', function() {
    it('基本类型用例通过', function() {
      const url = 'http://www.baidu.com?a=1&b=2'
      const params = utils.getUrlParams(url)
      expect(params.a).to.be('1')
      expect(params.b).to.be('2')
    })
  })
}) 