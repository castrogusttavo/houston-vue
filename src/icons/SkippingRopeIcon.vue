
<template>
  <Icon :iconName="'skipping-rope'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SkippingRopeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'skipping-rope'
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
