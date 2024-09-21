
<template>
  <Icon :iconName="'image-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Image01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-01'
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
