
<template>
  <Icon :iconName="'navigation-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Navigation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'navigation-01'
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
