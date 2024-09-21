
<template>
  <Icon :iconName="'coins-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coins02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-02'
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
