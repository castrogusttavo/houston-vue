
<template>
  <Icon :iconName="'video-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Video01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'video-01'
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
