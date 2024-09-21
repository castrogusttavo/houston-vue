
<template>
  <Icon :iconName="'alert-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlertSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alert-square'
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
