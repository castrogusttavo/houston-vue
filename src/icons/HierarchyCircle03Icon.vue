
<template>
  <Icon :iconName="'hierarchy-circle-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchyCircle03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-circle-03'
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
