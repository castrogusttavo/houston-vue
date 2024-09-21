
<template>
  <Icon :iconName="'hot-price'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotPriceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hot-price'
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
