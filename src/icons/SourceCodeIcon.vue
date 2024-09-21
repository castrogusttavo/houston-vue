
<template>
  <Icon :iconName="'source-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SourceCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'source-code'
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
