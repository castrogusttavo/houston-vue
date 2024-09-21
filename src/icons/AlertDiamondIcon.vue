
<template>
  <Icon :iconName="'alert-diamond'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlertDiamondIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alert-diamond'
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
