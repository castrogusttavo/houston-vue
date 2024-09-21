
<template>
  <Icon :iconName="'coordinate-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coordinate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coordinate-01'
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
