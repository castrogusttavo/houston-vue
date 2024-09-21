
<template>
  <Icon :iconName="'sorting-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SortingDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sorting-down'
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
