
<template>
  <Icon :iconName="'step-into'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StepIntoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'step-into'
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
