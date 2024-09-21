
<template>
  <Icon :iconName="'apple-stocks'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleStocksIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-stocks'
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
