
<template>
  <Icon :iconName="'rotate-crop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateCropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-crop'
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
