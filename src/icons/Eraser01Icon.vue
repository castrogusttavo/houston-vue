
<template>
  <Icon :iconName="'eraser-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Eraser01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eraser-01'
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
