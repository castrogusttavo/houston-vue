
<template>
  <Icon :iconName="'blush-brush-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlushBrush02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blush-brush-02'
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
