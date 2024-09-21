
<template>
  <Icon :iconName="'four-finger-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FourFinger02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'four-finger-02'
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
