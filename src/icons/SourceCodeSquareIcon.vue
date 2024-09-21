
<template>
  <Icon :iconName="'source-code-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SourceCodeSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'source-code-square'
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
