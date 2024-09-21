
<template>
  <Icon :iconName="'mouse-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-02'
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
