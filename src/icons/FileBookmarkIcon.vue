
<template>
  <Icon :iconName="'file-bookmark'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileBookmarkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-bookmark'
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
