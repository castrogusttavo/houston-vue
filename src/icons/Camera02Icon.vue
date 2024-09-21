
<template>
  <Icon :iconName="'camera-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Camera02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-02'
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
