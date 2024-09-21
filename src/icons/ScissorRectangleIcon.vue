
<template>
  <Icon :iconName="'scissor-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScissorRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scissor-rectangle'
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
