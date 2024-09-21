
<template>
  <Icon :iconName="'test-tube-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TestTube02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'test-tube-02'
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
