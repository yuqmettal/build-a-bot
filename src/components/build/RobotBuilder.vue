<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" alt="" title="head">
        <button class="prev-selector" @click="selectPreviousHead()">&#9668;</button>
        <button class="next-selector" @click="selectNextHead()">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left part">
        <button class="prev-selector" @click="selectPreviousLeftArm()">&#9668;</button>
        <button class="next-selector" @click="selectNextLeftArm()">&#9658;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="center part">
        <button class="prev-selector" @click="selectPreviousTorso()">&#9668;</button>
        <button class="next-selector" @click="selectNextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right part">
        <button class="prev-selector" @click="selectPreviousRightArm()">&#9668;</button>
        <button class="next-selector" @click="selectNextRightArm()">&#9658;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base">
        <button class="prev-selector" @click="selectPreviousBase()">&#9668;</button>
        <button class="next-selector" @click="selectNextBase()">&#9658;</button>
      </div>
    </div>
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import availableParts from '../../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
      cart: [],
    };
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = this.selectedRobot.head.cost
        + this.selectedRobot.leftArm.cost
        + this.selectedRobot.torso.cost
        + this.selectedRobot.rightArm.cost
        + this.selectedRobot.base.cost;
      this.cart.push({ ...robot, cost });
    },
    selectPreviousHead() {
      this.selectedHeadIndex -= 1;
      if (this.selectedHeadIndex < 0) {
        this.selectedHeadIndex = availableParts.heads.length - 1;
      }
    },
    selectNextHead() {
      this.selectedHeadIndex += 1;
      if (availableParts.heads.length === this.selectedHeadIndex) {
        this.selectedHeadIndex = 0;
      }
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex -= 1;
      if (this.selectedLeftArmIndex < 0) {
        this.selectedLeftArmIndex = availableParts.arms.length - 1;
      }
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex += 1;
      if (availableParts.arms.length === this.selectedLeftArmIndex) {
        this.selectedLeftArmIndex = 0;
      }
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex -= 1;
      if (this.selectedTorsoIndex < 0) {
        this.selectedTorsoIndex = availableParts.torsos.length - 1;
      }
    },
    selectNextTorso() {
      this.selectedTorsoIndex += 1;
      if (availableParts.torsos.length === this.selectedTorsoIndex) {
        this.selectedTorsoIndex = 0;
      }
    },

    selectPreviousRightArm() {
      this.selectedRightArmIndex -= 1;
      if (this.selectedRightArmIndex < 0) {
        this.selectedRightArmIndex = availableParts.arms.length - 1;
      }
    },
    selectNextRightArm() {
      this.selectedRightArmIndex += 1;
      if (availableParts.arms.length === this.selectedRightArmIndex) {
        this.selectedRightArmIndex = 0;
      }
    },
    selectPreviousBase() {
      this.selectedBaseIndex -= 1;
      if (this.selectedBaseIndex < 0) {
        this.selectedBaseIndex = availableParts.bases.length - 1;
      }
    },
    selectNextBase() {
      this.selectedBaseIndex += 1;
      if (availableParts.bases.length === this.selectedBaseIndex) {
        this.selectedBaseIndex = 0;
      }
    },
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.bases[this.selectedBaseIndex],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
</style>
