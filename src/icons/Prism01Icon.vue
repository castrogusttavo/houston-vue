
<template>
  <Icon :iconName="'prism-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Prism01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prism-01'
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
