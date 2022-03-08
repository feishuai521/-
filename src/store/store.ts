import { createStore } from 'vuex'
interface admin {
  id: number
  adminName: string
}
interface istate {
  admin: admin
}
const state: istate = {
  admin: { id: 1, adminName: 'feishuai' } as admin,
}
const stroe = createStore({
  state: state,
})
export default stroe
