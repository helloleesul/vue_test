<template>
  <div>
    <ul>
      <li>message : {{message}}</li>
      <li>message.length : {{message.length >= 10 ? '10글자 이상':'10글자 미만'}}입니다.</li>
      <li>v-model.number : <input v-model.number="count" /></li>
      <li>Math.round(3.1) : {{Math.round(3.1)}}</li>
    </ul>
    <Test :text-content.prop="message" />
    <Test :scroll-top.prop="scroll" />
    <ul>
      <li v-for="(item, i) in list" :key="item.id" v-show="item.hp">
        ID.{{item.id}}
        <strong>{{item.name}}</strong>
        HP.{{item.hp}}
        {{item.active}}
        <span v-if="item.hp < 50" :style="{color:'red'}">warning!</span>
        <button @click="attack(i)" :style="btnStyle">attack</button>
      </li>
    </ul>
    <div v-for="character in text" :key="character">{{character}}</div>
    <p ref="hello">HELLO</p>
    <div @click.capture="handler('div1')">
      div1
      <div @click="handler('div2')">
        div2
        <div @click="handler('div3')">div3</div>
      </div>
    </div>
    <input type="radio" v-model="val" value="A">A
    <input type="radio" v-model="val" value="B">B
    <input type="radio" v-model="val" value="C">C
    <p>{{val}}</p>
    <button @click="click">click</button>
    <Test2 :show="show1" />
  </div>
</template>

<script>
import Test from './Test.vue';
import Test2 from './Test2.vue';
import EventBus from '../eventBus';

export default {
  name: 'Home',
  components: {Test, Test2},
  data() {
    return {
      message: 'hello! vue.js',
      count: 1,
      scroll: 0,
      list: [
        { id:1, name:'A', hp: 100 },
        { id:2, name:'B', hp: 200 },
        { id:3, name:'C', hp: 300 },
      ],
      btnStyle: {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        margin: '10px'
      },
      text: 'Vue',
      val: '',
      show1: true
    }
  },
  methods: {
    attack(i) {
      this.list[i].hp -= 10;
    },
    handler(comment) {
      console.log(comment)
    },
    click() {
      EventBus.$emit('event');
      this.show1 = !this.show1
    }
  },
  created() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this);
  },
  mounted() {
    this.scroll = 100;
    this.list = this.list.filter(function(el) {
      return el.hp >= 100
    });
    console.log(this.$refs.hello)
    console.log(this.$el)
  }
}
</script>