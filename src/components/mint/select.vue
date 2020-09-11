<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.name }}
        <select @change="changea($event)">
          <option value="" disabled selected>必选</option>
          <option v-for="(item, index) in item.list2" :key="index">{{
            item.name
          }}</option>
        </select>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          // name: "第一个select",
          code: 12,
          list2: [
            { name: "飞飞飞23", code: 11 },
            { name: "闭包22", code: 22 },
          ],
        },
      ],
      list2: [
        {
          name: "第二个select",
          code: 12,
          list2: [
            { name: "哈哈哈", code: 33 },
            { name: "快快快", code: 44 },
          ],
        },
      ],
    };
  },
  methods: {
    changea(e) {
      console.log(e.target.value);
    },
  },
};
</script>
