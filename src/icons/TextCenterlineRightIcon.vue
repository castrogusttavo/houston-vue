
<template>
  <Icon :iconName="'text-centerline-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCenterlineRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-centerline-right'
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
