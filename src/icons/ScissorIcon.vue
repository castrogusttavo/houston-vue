
<template>
  <Icon :iconName="'scissor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScissorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scissor'
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
