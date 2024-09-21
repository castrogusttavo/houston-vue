
<template>
  <Icon :iconName="'electric-tower-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ElectricTower02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'electric-tower-02'
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
