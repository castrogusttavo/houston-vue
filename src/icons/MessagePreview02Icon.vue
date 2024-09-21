
<template>
  <Icon :iconName="'message-preview-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessagePreview02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-preview-02'
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
