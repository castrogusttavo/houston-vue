
<template>
  <Icon :iconName="'ok-finger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OkFingerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ok-finger'
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
