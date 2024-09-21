
<template>
  <Icon :iconName="'aspect-ratio'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AspectRatioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'aspect-ratio'
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
