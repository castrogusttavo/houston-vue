
<template>
  <Icon :iconName="'move-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Move02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-02'
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
