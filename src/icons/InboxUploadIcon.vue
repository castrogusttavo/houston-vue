
<template>
  <Icon :iconName="'inbox-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InboxUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inbox-upload'
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
