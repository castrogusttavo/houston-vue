
<template>
  <Icon :iconName="'video-console'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VideoConsoleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'video-console'
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
