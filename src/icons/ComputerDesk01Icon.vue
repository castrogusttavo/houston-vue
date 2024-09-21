
<template>
  <Icon :iconName="'computer-desk-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerDesk01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-desk-01'
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
