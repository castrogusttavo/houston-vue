
<template>
  <Icon :iconName="'step-out'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StepOutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'step-out'
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
