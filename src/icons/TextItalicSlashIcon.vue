
<template>
  <Icon :iconName="'text-italic-slash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextItalicSlashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-italic-slash'
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
