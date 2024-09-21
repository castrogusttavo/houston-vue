
<template>
  <Icon :iconName="'target-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Target02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'target-02'
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
