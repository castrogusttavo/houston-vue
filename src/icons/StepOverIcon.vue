
<template>
  <Icon :iconName="'step-over'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StepOverIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'step-over'
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
