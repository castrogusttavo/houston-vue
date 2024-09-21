
<template>
  <Icon :iconName="'three-finger-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeFinger02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'three-finger-02'
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
