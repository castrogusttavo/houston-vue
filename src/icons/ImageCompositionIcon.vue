
<template>
  <Icon :iconName="'image-composition'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageCompositionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-composition'
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
