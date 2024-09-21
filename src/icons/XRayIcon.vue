
<template>
  <Icon :iconName="'x-ray'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'XRayIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'x-ray'
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
