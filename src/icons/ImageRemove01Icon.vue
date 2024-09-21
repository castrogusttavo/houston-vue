
<template>
  <Icon :iconName="'image-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-remove-01'
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
