
<template>
  <Icon :iconName="'cloud-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-upload'
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
