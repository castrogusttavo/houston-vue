
<template>
  <Icon :iconName="'hierarchy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy'
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
