
<template>
  <Icon :iconName="'sd-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SdCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sd-card'
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
