
<template>
  <Icon :iconName="'hard-drive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HardDriveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hard-drive'
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
