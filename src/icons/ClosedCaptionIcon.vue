
<template>
  <Icon :iconName="'closed-caption'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClosedCaptionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'closed-caption'
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
