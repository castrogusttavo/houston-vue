
<template>
  <Icon :iconName="'upload-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Upload04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-04'
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
