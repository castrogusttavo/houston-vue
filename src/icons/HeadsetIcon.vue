
<template>
  <Icon :iconName="'headset'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeadsetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'headset'
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
