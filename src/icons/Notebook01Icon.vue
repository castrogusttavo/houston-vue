
<template>
  <Icon :iconName="'notebook-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Notebook01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notebook-01'
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
