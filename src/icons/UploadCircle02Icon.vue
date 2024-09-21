
<template>
  <Icon :iconName="'upload-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UploadCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'upload-circle-02'
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
