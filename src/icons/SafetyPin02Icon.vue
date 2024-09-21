
<template>
  <Icon :iconName="'safety-pin-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SafetyPin02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'safety-pin-02'
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
