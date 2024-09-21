
<template>
  <Icon :iconName="'tap-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-02'
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
