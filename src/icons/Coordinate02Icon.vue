
<template>
  <Icon :iconName="'coordinate-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coordinate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coordinate-02'
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
