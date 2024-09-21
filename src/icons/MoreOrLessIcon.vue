
<template>
  <Icon :iconName="'more-or-less'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreOrLessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-or-less'
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
