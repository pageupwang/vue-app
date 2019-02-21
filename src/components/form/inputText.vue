<template>
  <div class="input"
       :style="{width: width,height: height,'font-size':fontSize,'background':disabled?'#f5f7fa':'',}"
  >
    <input type="text"
           :disabled='disabled'
           :placeholder='placeholder'
           :value="value"
           @input.trim="inputs"
           :style="{height: height,'line-height':height,}"
    >
    <div class='clearable iconfont icon-close' @click.stop='clear' v-if='value'>
    
    </div>
    <div class="recommend" v-if='false'>
      <div class="recommend-item" v-for="(item,index) in 10">
        阿萨德阿萨德
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inputText",
    props: {
      placeholder: String,
      value: [String, Number],
      width: String,
      height: String,
      fontSize: String,
      disabled: Boolean,
    },
    components: {},
    data() {
      return {}
    },
    methods: {
      inputs(e) {
        this.$emit('input', e.target.value)
      },
      clear() {
        this.$emit('input', '')
      },
    },
    created() {
    
    },
  }
</script>

<style scoped lang="scss">
  $iconColor: #ccc;
  .input {
    font-size: 16px;
    text-align: center;
    position: relative;
    width: 506px;
    .clearable {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: $iconColor;
      cursor: pointer;
      display: none;
    }
    &:hover{
      .clearable{
        display: block;
      }
    }
    .recommend {
      position: absolute;
      width: 100%;
      max-height: 240px;
      background-color: #fff;
      top: 58px;
      left: 0;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: 14px;
      color: #666;
      text-align: left;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .recommend-item {
        height: 34px;
        line-height: 34px;
        padding-left: 20px;
        cursor: pointer;
        &:hover {
          background: rgba(95, 164, 255, .3)
        }
      }
    }
    input {
      display: inline-block;
      padding-left: 20px;
      color: #000;
      
      width: 100%;
      height: 56px;
      line-height: 56px;
      background: rgba(255, 255, 255, .8);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    input::placeholder {
      color: #999;
    }
    
  }
</style>
