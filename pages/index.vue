<template>
  <div>
    <div style='z-index: 2'>
      <div class='header' style="position: fixed;z-index: 5">
        <div class='buttons' @click='burgerClick()' id='brgr'>
          <div class='first' id="firstLine"></div>
          <div class='second' id="secondLine"></div>
        </div>
        <div class="logo">
          <p>Remont</p>
        </div>
        <div class="bar-items">
          <p v-for="text in items" class="text-items">{{ text }}</p>
        </div>
      </div>
    </div>
    <div :class='{"tr": !rotator, "tr2": rotator}' id="blocked"
         style='position: fixed;top: 65px; width: 320px;z-index: 1; overflow: scroll;'>
      <div class='content'>
        <div :class="{'tr': rotator}" class='list'>
          <a class="elem" v-for="item in items" :key="item.id" @click="onBodyClick()">{{ item }}</a>
        </div>
      </div>
    </div>
    <div @click="onBodyClick()" v-scroll="ff" style="z-index: 0">
      <div id="firstContent">
        <button style="">fd</button>
      </div>
      <div id="secondContent">
        <div id="secondContentFirst">
          <div v-for="icon in icons" class="secondContentItem">
            <i class="material-icons" style="height: 100px; color: red; width: 100px">{{ icon.icon }}</i>
            <div>
              <p>{{ icon.text }}</p>
            </div>
          </div>
        </div>
        <div class="secondContentSecond">
          <h1>Lorem ipsum.</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, mollitia!</h2>
        </div>
      </div>
      <div id="thirdContent">
      </div>
      <div id="form">

      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './navbar'
  import Drawer from './drawer'
  import 'material-design-icons-iconfont/dist/material-design-icons.css'

  export default {
    components: {
      appNavbar: Navbar,
      appDrawer: Drawer
    },
    data () {
      return {
        rotator: false,
        heightBlock: 0,
        items: [
          'My',
          'Your',
          'Their',
          'His',
          'Her',
        ],
        icons: [
          {
            icon: 'lock',
            text: 'sasa'
          },
          {
            icon: 'person',
            text: 'sasa'
          },
          {
            icon: 'bug_report',
            text: 'sasa'
          }
        ]
      }
    },
    methods: {
      ff () {
        const elem = document.getElementById('secondContent')
        const postop = elem.getBoundingClientRect().top
        if (postop + elem.clientHeight <= window.innerHeight && postop >= 0) {
          elem.classList.add('visible')
        } else {
          elem.classList.remove('visible')
        }
      },
      burgerClick () {
        this.rotator = !this.rotator
        let burger = document.getElementById('brgr'),
          firstLine = document.getElementById('firstLine'),
          secondLine = document.getElementById('secondLine'),
          lists = document.getElementsByTagName('a'),
          id = 0,
          timeId = setTimeout(log, 100)
        for (let i = 0; i < lists.length; i++) {
          lists[i].style.marginLeft = -300 + 'px'
        }

        function log () {
          if (!this.rotator) {
            lists[id].classList.add('animaLists')
            id++
            timeId = setTimeout(log, 100)
            if (id > lists.length - 1) {
              clearInterval(timeId)
            }
          }
        }

        if (this.rotator) {
          burger.classList.remove('rotate90Rev')
          firstLine.classList.remove('firstLineTrRev')
          secondLine.classList.remove('secondLineTrRev')
          burger.classList.add('rotate90')
          setTimeout(() => {
            firstLine.classList.add('firstLineTr')
            secondLine.classList.add('secondLineTr')
          }, 400)
        } else {
          firstLine.classList.remove('firstLineTr')
          secondLine.classList.remove('secondLineTr')
          firstLine.classList.add('firstLineTrRev')
          secondLine.classList.add('secondLineTrRev')
          setTimeout(() => {
            burger.classList.add('rotate90Rev')
          }, 400)
          clearInterval(timeId)
          for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove('animaLists')
          }
        }
      },
      onBodyClick () {
        this.rotator = false;
        let burger = document.getElementById('brgr'),
          firstLine = document.getElementById('firstLine'),
          secondLine = document.getElementById('secondLine'),
          lists = document.getElementsByTagName('a')

        firstLine.classList.remove('firstLineTr')
        secondLine.classList.remove('secondLineTr')
        firstLine.classList.add('firstLineTrRev')
        secondLine.classList.add('secondLineTrRev')

        setTimeout(() => {
          burger.classList.add('rotate90Rev')
        }, 400);
        for (let i = 0; i < lists.length; i++) {
          lists[i].classList.remove('animaLists')
        }
      }
    },
    mounted () {
      this.heightBlock = window.innerHeight
      document.getElementById('blocked').style.height = this.heightBlock + 'px'
      document.getElementById('firstContent').style.height = this.heightBlock  + 'px'
      document.getElementById('thirdContent').style.height = this.heightBlock + 'px'
      document.getElementById('form').style.height = this.heightBlock * 0.9 + 'px'
      document.querySelector(".content").style.height = this.heightBlock + 'px'
    }
  }
</script>

<style scoped>
  .secondContentSecond {
    text-align: center;
    font-weight: lighter;
    font-family: Calibri,serif;
  }
  #secondContentFirst {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  #form {
    background: orange;
  }
  .secondContentItem {
    text-align: center;
    padding: 10px;
    border: 1px solid black;
    margin: 30px;
    flex-basis: 10%
  }
  #secondContent {
    border: 1px solid black;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }
  #secondContent.visible {
    border: 1px solid blue
  }
  .text-items {
    display: inline-block;
    height: 100%;
    font-size: 20px;
    padding: 17px;
    transition: .5s all;
    cursor: pointer;
  }
  .text-items:hover {
    background: wheat;
    transition: .5s all;
    color: black;
  }
  .tr {
    animation-name: ss;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes ss {
    from {
      left: 0;
    }
    to {
      left: -100%;
    }
  }

  .tr2 {
    animation-name: ss2;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes ss2 {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }

  .header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 65px;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
  }

  .buttons {
    position: relative;
    height: 100%;
    width: 90px;
    display: none;
  }

  .first, .second {
    height: 1px;
    width: 30px;
    left: 30px;
    background-color: white;
  }

  .first {
    top: 21px;
    position: absolute;
  }
  .logo {
    color: wheat;
    margin-top: 10px;
    font-size: 35px;
    font-family: Calibri,serif;
    position: relative;
    margin-left: 30px;
  }
  .bar-items {
    color: wheat;
    display: block;
    position: absolute;
    right: 0;
    height: 100%;
  }
  .second {
    top: 42px;
    position: absolute;
  }

  .rotate90 {
    transition: .5s all;
    transform: rotate(90deg);
    transform-origin: 43px;
  }

  .firstLineTr {
    transform: rotate(45deg);
    transform-origin: left;
    transition: .5s all
  }

  .secondLineTr {
    transform: rotate(-45deg);
    transform-origin: left;
    transition: .5s all
  }

  .secondLineTrRev {
    transform: rotate(0deg);
    transform-origin: left;
    transition: .5s all
  }

  .firstLineTrRev {
    transform: rotate(0deg);
    transform-origin: left;
    transition: .5s all
  }

   .rotate90Rev {
    transform-origin: 43px;
    transition: .5s all;
    transform: rotate(0deg);
  }

  .content {
    background-color: rgba(0, 0, 0, .7);
    padding: 1px 1px 100px;
  }

  .list {
    list-style-type: none;
    color: white;
    font-size: 30px;

  }

  .animaLists {
    animation-name: animLists;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes animLists {
    from {
      margin-left: -300px;
    }
    to {
      margin-left: 20px;
    }
  }

  .elem {
    margin: 20px;
    padding: 20px;
    transition: .2s all;
    border: 0 solid black;
    display: block;
    cursor: pointer;
    outline: none;
  }

  .elem:hover {
    border: 2px solid rgba(255, 255, 255, .5);
    transition: .2s all;
    border-radius: 10px;
    padding: 20px
  }

  #firstContent {
    background-size: 100%;
    background: url("https://belsimplit.by/wp-content/uploads/2016/01/FIB01.jpg") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    .buttons {
      display: block;
    }
    .logo {
      margin-left: 10px;
    }
    .bar-items {
      display: none;
    }
  }
</style>
