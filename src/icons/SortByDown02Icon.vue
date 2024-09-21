
<template>
  <Icon :iconName="'sort-by-down-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortByDown02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sort-by-down-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
