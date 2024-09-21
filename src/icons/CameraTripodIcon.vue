
<template>
  <Icon :iconName="'camera-tripod'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraTripodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-tripod'
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
