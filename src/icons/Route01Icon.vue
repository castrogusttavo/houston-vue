
<template>
  <Icon :iconName="'route-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Route01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'route-01'
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
