
<template>
  <Icon :iconName="'touch-locked-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchLocked04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-locked-04'
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
