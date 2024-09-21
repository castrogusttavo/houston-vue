
<template>
  <Icon :iconName="'circle-arrow-up-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowUpRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-up-right'
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
