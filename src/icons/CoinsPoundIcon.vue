
<template>
  <Icon :iconName="'coins-pound'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoinsPoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-pound'
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
