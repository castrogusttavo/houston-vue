
<template>
  <Icon :iconName="'more-or-less-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreOrLessSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-or-less-square'
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
