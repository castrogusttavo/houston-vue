
<template>
  <Icon :iconName="'direction-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DirectionRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'direction-right-02'
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
