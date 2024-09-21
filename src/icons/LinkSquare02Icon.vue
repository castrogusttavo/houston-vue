
<template>
  <Icon :iconName="'link-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinkSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-square-02'
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
