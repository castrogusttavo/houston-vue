
<template>
  <Icon :iconName="'diagonal-scroll-point-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiagonalScrollPoint01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diagonal-scroll-point-01'
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
