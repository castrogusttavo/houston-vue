
<template>
  <Icon :iconName="'layout-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-02'
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
