
<template>
  <Icon :iconName="'sidebar-left-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarLeft01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-left-01'
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
