
<template>
  <Icon :iconName="'upload-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UploadSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-square-02'
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
