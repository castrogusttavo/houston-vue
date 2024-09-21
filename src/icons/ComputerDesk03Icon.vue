
<template>
  <Icon :iconName="'computer-desk-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerDesk03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-desk-03'
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
