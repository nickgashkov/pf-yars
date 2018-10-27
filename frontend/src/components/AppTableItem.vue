<template>
  <tr>
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
</template>

<script>
export default {
  name: "AppTableItem",
  props: {
    item: Object,
    valuesKeys: Array,
    itemDetailRouteName: String,
    itemDetailRouteParamsGetter: Function,
  },
}
</script>
