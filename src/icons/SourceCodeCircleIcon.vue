
<template>
  <Icon :iconName="'source-code-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SourceCodeCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'source-code-circle'
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
