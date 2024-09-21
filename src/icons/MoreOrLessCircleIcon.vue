
<template>
  <Icon :iconName="'more-or-less-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreOrLessCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-or-less-circle'
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
