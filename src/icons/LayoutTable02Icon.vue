
<template>
  <Icon :iconName="'layout-table-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutTable02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-table-02'
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
