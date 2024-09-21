
<template>
  <Icon :iconName="'file-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'File01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-01'
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
