// 接口请求
// import request from '../../utils/request'

export default {
  state: {
    status: -1,
    message: '',
    data: null
  }, // initial state
  reducers: {
    result(state, payload) {
      return Object.assign({}, state, payload)
    }
  },
  effects: dispatch => ({
    // rootState:全局store data
    // payload 所传参数
    async getResult(payload, rootState) {
      // 不要删除，demo
      // eslint-disable-next-line
      console.log(payload)
      // eslint-disable-next-line
      console.log(rootState)
      return 1
    }
  })
}
