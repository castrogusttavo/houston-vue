
<template>
  <Icon :iconName="'circle-arrow-expand-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowExpand01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-expand-01'
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
