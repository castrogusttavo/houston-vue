
<template>
  <Icon :iconName="'ice-cream-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceCream02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-cream-02'
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
