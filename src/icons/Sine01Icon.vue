
<template>
  <Icon :iconName="'sine-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sine01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sine-01'
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
