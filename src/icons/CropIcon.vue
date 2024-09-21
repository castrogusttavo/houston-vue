
<template>
  <Icon :iconName="'crop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crop'
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
