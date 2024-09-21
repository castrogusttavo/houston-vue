
<template>
  <Icon :iconName="'image-not-found-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageNotFound01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-not-found-01'
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
