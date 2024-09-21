
<template>
  <Icon :iconName="'message-upload-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageUpload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-upload-02'
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
