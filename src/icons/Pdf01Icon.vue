
<template>
  <Icon :iconName="'pdf-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pdf01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pdf-01'
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
