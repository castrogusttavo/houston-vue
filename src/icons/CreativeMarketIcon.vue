
<template>
  <Icon :iconName="'creative-market'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreativeMarketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'creative-market'
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
