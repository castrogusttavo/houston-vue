
<template>
  <Icon :iconName="'save-energy-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveEnergy02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-energy-02'
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
