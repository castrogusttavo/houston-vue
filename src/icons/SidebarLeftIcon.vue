
<template>
  <Icon :iconName="'sidebar-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-left'
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
