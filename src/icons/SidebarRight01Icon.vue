
<template>
  <Icon :iconName="'sidebar-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SidebarRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sidebar-right-01'
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
