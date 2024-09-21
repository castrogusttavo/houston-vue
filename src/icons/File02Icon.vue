
<template>
  <Icon :iconName="'file-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'File02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-02'
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
