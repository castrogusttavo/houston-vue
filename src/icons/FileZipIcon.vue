
<template>
  <Icon :iconName="'file-zip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileZipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-zip'
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
