
<template>
  <Icon :iconName="'pen-tool-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenTool02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-tool-02'
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
