
<template>
  <Icon :iconName="'database-sync-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseSync01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-sync-01'
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
