
<template>
  <Icon :iconName="'math'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MathIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'math'
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
