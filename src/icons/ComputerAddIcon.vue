
<template>
  <Icon :iconName="'computer-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-add'
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
