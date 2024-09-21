
<template>
  <Icon :iconName="'vr-glasses'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VrGlassesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vr-glasses'
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
