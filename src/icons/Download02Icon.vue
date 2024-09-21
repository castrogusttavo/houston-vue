
<template>
  <Icon :iconName="'download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Download02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-02'
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
