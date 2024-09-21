
<template>
  <Icon :iconName="'hierarchy-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchyCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-circle-02'
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
