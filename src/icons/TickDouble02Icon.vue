
<template>
  <Icon :iconName="'tick-double-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TickDouble02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tick-double-02'
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
