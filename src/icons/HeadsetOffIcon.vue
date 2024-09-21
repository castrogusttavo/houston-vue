
<template>
  <Icon :iconName="'headset-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeadsetOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'headset-off'
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
