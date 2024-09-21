
<template>
  <Icon :iconName="'closed-caption-alt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClosedCaptionAltIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'closed-caption-alt'
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
