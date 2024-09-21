
<template>
  <Icon :iconName="'text-tracking'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextTrackingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-tracking'
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
