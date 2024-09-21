
<template>
  <Icon :iconName="'tree-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tree03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tree-03'
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
