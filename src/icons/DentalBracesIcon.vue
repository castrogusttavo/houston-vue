
<template>
  <Icon :iconName="'dental-braces'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DentalBracesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dental-braces'
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
