
<template>
  <Icon :iconName="'cylinder-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cylinder02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cylinder-02'
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
