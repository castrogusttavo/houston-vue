
<template>
  <Icon :iconName="'hold-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hold02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hold-02'
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
