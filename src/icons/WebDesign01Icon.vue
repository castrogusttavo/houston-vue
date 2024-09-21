
<template>
  <Icon :iconName="'web-design-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebDesign01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-design-01'
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
