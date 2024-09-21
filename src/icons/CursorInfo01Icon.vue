
<template>
  <Icon :iconName="'cursor-info-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorInfo01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-info-01'
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
