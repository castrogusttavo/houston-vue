
<template>
  <Icon :iconName="'lock-sync-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockSync01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock-sync-01'
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
