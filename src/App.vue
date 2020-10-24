<template>
  <div id="app">
    <h1>element 与 font-awesome 的图标库</h1>
    <div class="icon">
      <ul>
        <li v-for="(item) in iconList" :key="item.iconName" class="icon-item">
          <e-f-icon :name="item.iconName"></e-f-icon>
          <span class="title">{{ item.iconName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import iconList from "./assets/ConstIcon";
import EFIcon from "./components/ef-icon/EFIcon";

export default {
  name: 'app',
  components: {EFIcon},
  data: () => ({
    iconList: []
  }),
  created() {
    this.iconList = iconList.sort(this.compare('iconName', '')).map(item => {
      item.id = Date.now() + Math.random().toString(16).substring(2, 9);
      return item;
    })
  },
  methods: {
    compare(propertyName, desc) {
      return function (object1, object2) {
        let value1 = object1[propertyName]
        let value2 = object2[propertyName]
        if (desc === 'desc') {
          if (value2 < value1) {
            return -1
          } else if (value2 > value1) {
            return 1
          } else {
            return 0
          }
        } else {
          if (value2 < value1) {
            return 1
          } else if (value2 > value1) {
            return -1
          } else {
            return 0
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

.icon {
  width: 100%;
  height: 100%;

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    &::after {//处理最后一行
      content: '';
      flex-grow: 999999999;
    }

    .icon-item {
      width: 120px;
      flex-grow: 1;
      text-align: center;
      color: #666;
      height: 120px;
      font-size: 13px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;

      &:hover, &:hover > i {
        color: #5cb6ff;
      }

      i {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
      }

      .title {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
