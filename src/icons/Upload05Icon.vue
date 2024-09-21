
<template>
  <Icon :iconName="'upload-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Upload05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-05'
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
