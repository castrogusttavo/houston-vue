
<template>
  <Icon :iconName="'diamond'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiamondIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diamond'
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
