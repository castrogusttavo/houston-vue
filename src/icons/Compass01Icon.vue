
<template>
  <Icon :iconName="'compass-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Compass01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'compass-01'
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
