
<template>
  <Icon :iconName="'link-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinkSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-square-01'
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
