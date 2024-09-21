
<template>
  <Icon :iconName="'hospital-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hospital01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hospital-01'
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
