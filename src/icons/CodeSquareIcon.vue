
<template>
  <Icon :iconName="'code-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CodeSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'code-square'
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
