
<template>
  <Icon :iconName="'attachment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AttachmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'attachment'
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
