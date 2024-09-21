
<template>
  <Icon :iconName="'quill-write-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuillWrite02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quill-write-02'
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
