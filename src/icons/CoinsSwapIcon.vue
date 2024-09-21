
<template>
  <Icon :iconName="'coins-swap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoinsSwapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-swap'
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
