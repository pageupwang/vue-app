<template>
  <div class="selectSmiple"
       :style="{width:width?width:'','background':disabled?'#eee':'',height:height?height:''}"
       @click.stop='showList'
  >
    <div class='selectSmiple-modal' :id='id'>
      <div class='clearable iconfont icon-close' @click.stop='clear' v-if='name&&closeFlag'>
      
      </div>
    </div>
    <div class="triangle" v-show='!(closeFlag&&name)' :style="{transform:'rotate('+angle+')'}">
      <i class='iconfont icon-down' ></i>
    </div>
    
    <input type="text" disabled :placeholder='placeholder'
           :style="{width:width?width:'','background':disabled?'#f5f7fa':'',height:height?height:'','font-size':fontSize}"
           v-model='name'
    >
    <div class="selectList" :style="{top:height}" v-if='listFlag&&options.length'>
      <div class="selectList-item" v-for="(item,index) in options" :key='index' @click.stop='checkItem(item)'>
        {{item.name}}
      </div>
    </div>
  
  </div>
</template>

<script>
  import '../../../static/font/iconfont.css'
  
  export default {
    name: "selectSmiple",
    props: ['placeholder', 'width', "options", 'value', 'disabled', 'border', 'height', 'fontSize'],
    data() {
      return {
        listFlag: false,
        closeFlag: false,
        name: "",
        id: 'input' + Math.random()
      }
    },
    methods: {
      showList() {
        if (this.disabled) {
          return false
        }
        this.listFlag = !this.listFlag
      },
      checkItem(item) {
        this.name = item.name
        this.$emit('input', item.id)
        this.listFlag = false
      },
      clear() {
        this.name = ''
        this.$emit('input', '')
      },
    },
    mounted() {
      this.$nextTick(function () {
        let body = document.getElementsByTagName('body')[0]
        body.addEventListener('click', () => {
          this.listFlag = false
        })
        let modal = document.getElementById(this.id);
        modal.addEventListener('mouseenter', () => {
          this.closeFlag = true
          console.log(this.closeFlag);
        })
        modal.addEventListener('mouseleave', () => {
          this.closeFlag = false
          
        })
        
      })
    },
    computed: {
      angle() {
        if(this.listFlag){
          return '180deg'
        }else{
          return 0
        }
      }
    },
    destroyed() {
      let body = document.getElementsByTagName('body')[0]
      body.removeEventListener('click', null)
    },
  }
</script>

<style scoped lang='scss'>
  $iconColor: #ccc;
  .selectSmiple {
    display: inline-block;
    width: 230px;
    height: 56px;
    position: relative;
    .selectSmiple-modal {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
    }
    .selectList {
      position: absolute;
      width: 100%;
      left: 0;
      background-color: #fff;
      max-height: 240px;
      overflow-y: auto;
      overflow-x: hidden;
      top: 56px;
      border: 1px solid #eee;
      z-index: 9;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .selectList-item {
        height: 34px;
        text-align: left;
        line-height: 34px;
        padding-left: 20px;
        cursor: pointer;
        &:hover {
          background: rgba(95, 164, 255, .3)
        }
      }
    }
    .triangle {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: $iconColor;
      transform-origin: 50% 50%;
      transition: all .3s linear;
      margin-top: -9px;
      text-align: center;
      i {
        font-size: 12px;
        /*transition: all .2s linear;*/
      }
    }
    .clearable {
      position: absolute;
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: $iconColor;
      cursor: pointer;
    }
    input {
      display: inline-block;
      padding-left: 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 230px;
      height: 56px;
      line-height: 56px;
      cursor: pointer;
      font-size: 16px;
      &::placeholder {
        color: #999;
      }
      &:disabled {
        background-color: #fff;
      }
    }
  }

</style>
