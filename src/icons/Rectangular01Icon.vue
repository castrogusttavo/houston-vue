
<template>
  <Icon :iconName="'rectangular-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Rectangular01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rectangular-01'
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
