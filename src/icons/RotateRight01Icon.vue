
<template>
  <Icon :iconName="'rotate-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-right-01'
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
