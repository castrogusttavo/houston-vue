
<template>
  <Icon :iconName="'touch-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-01'
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
