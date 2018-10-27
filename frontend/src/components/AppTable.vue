<template>
  <table class="table is-striped is-hoverable">
    <thead>
    <tr>
      <th v-for="header in headers" v-bind:key="header">{{ header }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" v-bind:key="item[itemBindingKey]">
      <td v-for="(valueKey, index) in valuesKeys" v-bind:key="valueKey">
        <router-link
          v-if="index === 0"
          v-bind:to="{
            name: itemDetailRouteName,
            params: itemDetailRouteParamsGetter(item)
          }"
        >
          {{ item[valueKey] }}
        </router-link>
        <span v-else>
          {{ item[valueKey] }}
        </span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AppList",
  props: {
    items: Array,
    headers: Array,
    valuesKeys: Array,
    itemDetailRouteName: String,
    itemDetailRouteParamsGetter: Function,
    itemBindingKey: {
      type: String,
      default: "id"
    },
  },
}
</script>
