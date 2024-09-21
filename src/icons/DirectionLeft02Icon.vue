
<template>
  <Icon :iconName="'direction-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DirectionLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'direction-left-02'
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
