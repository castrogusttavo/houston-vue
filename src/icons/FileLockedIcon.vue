
<template>
  <Icon :iconName="'file-locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileLockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-locked'
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
