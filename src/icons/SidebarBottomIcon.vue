
<template>
  <Icon :iconName="'sidebar-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-bottom'
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
