
<template>
  <Icon :iconName="'files-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Files01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'files-01'
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
