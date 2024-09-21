
<template>
  <Icon :iconName="'image-composition-oval'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageCompositionOvalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-composition-oval'
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
