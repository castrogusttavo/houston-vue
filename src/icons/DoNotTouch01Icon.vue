
<template>
  <Icon :iconName="'do-not-touch-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DoNotTouch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'do-not-touch-01'
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
