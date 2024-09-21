
<template>
  <Icon :iconName="'timer-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Timer01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'timer-01'
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
