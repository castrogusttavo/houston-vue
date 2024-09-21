
<template>
  <Icon :iconName="'text-centerline-center-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCenterlineCenterTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-centerline-center-top'
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
