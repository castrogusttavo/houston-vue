
<template>
  <Icon :iconName="'wrench-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wrench02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wrench-02'
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
