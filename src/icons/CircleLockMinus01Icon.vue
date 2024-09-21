
<template>
  <Icon :iconName="'circle-lock-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleLockMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-lock-minus-01'
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
