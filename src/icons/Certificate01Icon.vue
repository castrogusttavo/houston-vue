
<template>
  <Icon :iconName="'certificate-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Certificate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'certificate-01'
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
