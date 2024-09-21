
<template>
  <Icon :iconName="'waste-restore'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WasteRestoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waste-restore'
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
