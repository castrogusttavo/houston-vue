
<template>
  <Icon :iconName="'doc-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Doc01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doc-01'
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
