
<template>
  <Icon :iconName="'database-sync'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseSyncIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-sync'
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
