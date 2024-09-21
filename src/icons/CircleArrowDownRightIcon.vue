
<template>
  <Icon :iconName="'circle-arrow-down-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDownRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-down-right'
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
