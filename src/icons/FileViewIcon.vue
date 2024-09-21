
<template>
  <Icon :iconName="'file-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-view'
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
