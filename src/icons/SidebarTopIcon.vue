
<template>
  <Icon :iconName="'sidebar-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-top'
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
