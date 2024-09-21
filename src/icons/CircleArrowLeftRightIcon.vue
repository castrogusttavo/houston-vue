
<template>
  <Icon :iconName="'circle-arrow-left-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowLeftRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-left-right'
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
