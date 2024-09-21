
<template>
  <Icon :iconName="'timer-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Timer02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'timer-02'
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
