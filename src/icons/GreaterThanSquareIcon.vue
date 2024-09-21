
<template>
  <Icon :iconName="'greater-than-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GreaterThanSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'greater-than-square'
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
