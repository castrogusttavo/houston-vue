
<template>
  <Icon :iconName="'database-restore'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseRestoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-restore'
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
