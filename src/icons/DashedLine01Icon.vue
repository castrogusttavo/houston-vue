
<template>
  <Icon :iconName="'dashed-line-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashedLine01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashed-line-01'
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
