
<template>
  <Icon :iconName="'blush-brush-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlushBrush01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blush-brush-01'
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
