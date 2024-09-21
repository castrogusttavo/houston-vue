
<template>
  <Icon :iconName="'edit-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EditTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edit-table'
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
