
<template>
  <Icon :iconName="'open-caption'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OpenCaptionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'open-caption'
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
