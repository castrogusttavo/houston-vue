
<template>
  <Icon :iconName="'video-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VideoOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'video-off'
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
