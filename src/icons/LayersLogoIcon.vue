
<template>
  <Icon :iconName="'layers-logo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayersLogoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layers-logo'
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
