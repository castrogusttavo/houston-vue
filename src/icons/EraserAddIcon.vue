
<template>
  <Icon :iconName="'eraser-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EraserAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eraser-add'
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
