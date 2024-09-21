
<template>
  <Icon :iconName="'fuel-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Fuel02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fuel-02'
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
