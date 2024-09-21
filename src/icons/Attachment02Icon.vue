
<template>
  <Icon :iconName="'attachment-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Attachment02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'attachment-02'
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
