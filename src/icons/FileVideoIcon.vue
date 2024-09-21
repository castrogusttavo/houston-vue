
<template>
  <Icon :iconName="'file-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-video'
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
