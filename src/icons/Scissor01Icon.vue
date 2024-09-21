
<template>
  <Icon :iconName="'scissor-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Scissor01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scissor-01'
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
