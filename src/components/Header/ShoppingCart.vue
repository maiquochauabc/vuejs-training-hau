<template>
  <el-popover placement="bottom" :width="400" trigger="click">
    <template #reference>
      <el-button icon="el-icon-goods"> Cart (0)</el-button>
    </template>
    <el-table :data="gridData">
      <el-table-column
        width="150"
        property="date"
        label="date"
      ></el-table-column>
      <el-table-column
        width="100"
        property="name"
        label="name"
      ></el-table-column>
      <el-table-column
        width="300"
        property="address"
        label="address"
      ></el-table-column>
    </el-table>
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-04",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-01",
          name: "Jack",
          address: "New York City",
        },
        {
          date: "2016-05-03",
          name: "Jack",
          address: "New York City",
        },
      ],
    };
  },
};
</script>
