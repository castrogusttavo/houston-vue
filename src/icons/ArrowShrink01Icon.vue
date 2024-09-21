
<template>
  <Icon :iconName="'arrow-shrink-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowShrink01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-shrink-01'
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
