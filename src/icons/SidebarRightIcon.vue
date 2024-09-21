
<template>
  <Icon :iconName="'sidebar-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-right'
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
