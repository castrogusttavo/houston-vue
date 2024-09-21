
<template>
  <Icon :iconName="'computer-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-check'
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
