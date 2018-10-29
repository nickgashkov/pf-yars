<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
    <tr>
      <th v-for="header in headers" v-bind:key="header">{{ header }}</th>
    </tr>
    </thead>
    <tbody>
      <app-table-item
        v-for="item in items"
        v-bind:key="item[itemBindingKey]"
        v-bind:item="item"
        v-bind:valuesKeys="valuesKeys"
        v-bind:itemDetailRouteName="itemDetailRouteName"
        v-bind:itemDetailRouteParamsGetter="itemDetailRouteParamsGetter"
      />
    </tbody>
  </table>
</template>

<script>
import AppTableItem from "./AppTableItem";

export default {
  name: "AppTable",
  components: { AppTableItem },
  props: {
    items: Array,
    headers: Array,
    valuesKeys: Array,
    itemDetailRouteName: String,
    itemDetailRouteParamsGetter: Function,
    itemBindingKey: {
      type: String,
      default: "id"
    }
  }
};
</script>
