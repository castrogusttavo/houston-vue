
<template>
  <Icon :iconName="'circle-arrow-down-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDownLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-down-left'
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
