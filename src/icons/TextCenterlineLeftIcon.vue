
<template>
  <Icon :iconName="'text-centerline-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCenterlineLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-centerline-left'
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
