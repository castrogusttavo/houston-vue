
<template>
  <Icon :iconName="'upload-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UploadCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-circle-01'
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
