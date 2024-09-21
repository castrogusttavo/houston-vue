
<template>
  <Icon :iconName="'remove-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RemoveSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-square'
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
