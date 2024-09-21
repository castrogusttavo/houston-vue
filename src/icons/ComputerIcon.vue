
<template>
  <Icon :iconName="'computer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer'
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
