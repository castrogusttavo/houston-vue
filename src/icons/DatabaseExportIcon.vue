
<template>
  <Icon :iconName="'database-export'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseExportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-export'
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
