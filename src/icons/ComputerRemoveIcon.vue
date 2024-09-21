
<template>
  <Icon :iconName="'computer-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-remove'
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
