
<template>
  <Icon :iconName="'external-drive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ExternalDriveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'external-drive'
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
