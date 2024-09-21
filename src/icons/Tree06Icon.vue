
<template>
  <Icon :iconName="'tree-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tree06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tree-06'
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
