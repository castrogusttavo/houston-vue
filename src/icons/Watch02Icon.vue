
<template>
  <Icon :iconName="'watch-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Watch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'watch-02'
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
