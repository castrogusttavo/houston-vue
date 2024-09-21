
<template>
  <Icon :iconName="'tree-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tree07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tree-07'
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
