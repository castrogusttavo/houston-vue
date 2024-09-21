
<template>
  <Icon :iconName="'upload-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UploadSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-square-01'
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
