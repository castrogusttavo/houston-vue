
<template>
  <Icon :iconName="'computer-desk-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerDesk02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-desk-02'
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
