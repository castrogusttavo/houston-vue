
<template>
  <Icon :iconName="'sort-by-down-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortByDown01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sort-by-down-01'
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
