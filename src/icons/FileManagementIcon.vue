
<template>
  <Icon :iconName="'file-management'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileManagementIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-management'
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
