import { reactive, ref } from 'vue'
const title = ref('你好')

const show = () => {
  console.log('houdunren.com')
}

const article = reactive({
  username: 'houdunren',
  avatar: '/images/logo.png',
})
const list = {
  fs: true,
}

const color = true
let feishuai = [
  {
    name: '飞帅',
    isDtae: false,
  },
  {
    name: 'feishaui',
    isDtae: false,
  },
]
// feishuai.join()
let feis = [
  { id: 1, name: 'feishuai', age: 18, xb: 1 },
  { id: 2, name: 'fs', age: 60, xb: 0 },
  { id: 3, name: 'fei', age: 40, xb: 1 },
  { id: 4, name: 'feisais', age: 14, xb: 1 },
  { id: 5, name: 'feisis', age: 35, xb: 1 },
]
export default { feis, feishuai }
