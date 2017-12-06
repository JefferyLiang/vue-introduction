<template>
  <div id="dimmerContainer" :class="{ 'intro': active }" @click.stop="nextPart">
    <div id="stepContianer">
      <div class="hiLight">
        <div id="tipsDesc" class="tipsContent">{{ stepsList[step - 1] ? stepsList[step - 1].content : '' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import _ from 'lodash'
export default {
  name: 'FbIntro',
  props: {
    'stepsList': {
      type: Array,
      default: () => []
    },
    'active': {
      type: Boolean
    }
  },
  data() {
    return {
      step: 0,
      clientWidth: window.innerWidth,
      clientHeight: window.innerHeight,
      lock: false
    }
  },
  mounted () {
    if (!this.active) return
    if (this.getDocumentPosition()) return this.setPosition();
  },
  updated() {
    if (!this.active) return;
    if (!this.getDocumentPosition()) {
      if (process.env.NODE_ENV !== 'production') console.error('can not catch all elment!');
      return;
    }
    if (this.step === -1 || this.step === 0) this.nextPart()
  },
  methods: {
    getDocumentPosition () {
      for (let item of this.stepsList) {
        let $dom = document.getElementsByClassName(item.className);
        if (!$dom) return false;
        item.el = $dom[0];
        item.width = $dom[0].clientWidth;
        item.height = $dom[0].clientHeight;
        item.top = $dom[0].offsetTop;
        item.left = $dom[0].offsetLeft;
      }
      return true;
    },
    setPosition() {
      if (!this.active) return;
      let activeStep = this.stepsList[this.step];
      Velocity(document.getElementById('stepContianer'), {
        position: 'absoulte',
        width: activeStep.width,
        height: activeStep.height + 20,
        top: activeStep.top - 10,
        left: activeStep.left,
        'z-index': 1000
      }, {
        duration: 300,
        begin: () => {
          this.lock = true
        },
        complete: (elements) => {
          this.lock = false
          this.setContentPosition(elements);
        }
      });
    },
    setContentPosition(elements) {
      if (process.env.NODE_ENV !== 'production') console.log(elements[0].getBoundingClientRect())
      let location = elements[0].getBoundingClientRect();
      let distanceTop = location.top;
      let distanceBottom = this.clientHeight - (location.top + location.height);
      let tipsStyle = {
        position: 'absolute',
        width: location.width,
        left: 0
      };
      // 检测块上部分位置多还是下部分位置多
      distanceTop > distanceBottom ? tipsStyle.top = '-100%' : tipsStyle.top = '100%';
      // 检测是否左贴边
      if (location.width < 200) {
        if (location.left < 50) tipsStyle.left = 0
        else if ((this.clientWidth - (location.x + location.width)) < 50) tipsStyle.left = -(200 - location.width)
        else tipsStyle.left = -((200 - location.width) / 2)
      }
      Velocity(document.getElementById('tipsDesc'), tipsStyle, {
        duration: 150
      })
    },
    nextPart() {
      if (this.lock) return;
      if (this.step === -1) this.step++
      if (this.step === 0) this.$emit('intro-begin')
      if (this.stepsList[this.step]) this.setPosition();
      if (this.step === this.stepsList.length) {
        this.$emit('intro-end');
        this.step = -1;
        return
      }
      this.step++;
      this.$emit('intro-next', this.step - 1)
    }
  }
}
</script>

<style scoped lang="scss">
#dimmerContainer {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.intro{
  display: block!important;
}

#stepContianer {
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 1px 10000px;
  .hiLight {
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    .tipsContent {
      min-width: 200px;
      position: absolute;
      font-size: 1.1rem;
      color: #fff;
      overflow: hidden;
      text-align: center;
      transition: all .3s;
      line-height: 23px;
    }
  }
}
</style>