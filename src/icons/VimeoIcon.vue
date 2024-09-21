
<template>
  <Icon :iconName="'vimeo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VimeoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vimeo'
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
