
<template>
  <Icon :iconName="'image-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-add-01'
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
