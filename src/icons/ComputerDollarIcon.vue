
<template>
  <Icon :iconName="'computer-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-dollar'
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
