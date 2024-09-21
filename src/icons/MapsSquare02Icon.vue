
<template>
  <Icon :iconName="'maps-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-square-02'
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
