
<template>
  <Icon :iconName="'database-import'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseImportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-import'
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
