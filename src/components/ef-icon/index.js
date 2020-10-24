import EFIcon from "./EFIcon";

EFIcon.install = function (vue){
  vue.component(EFIcon.name, EFIcon);
}
// 默认导出一个install方法， 便于Vue.use()
export default EFIcon;
// 这个导出用于， import 导入组件
export {
  EFIcon
}
