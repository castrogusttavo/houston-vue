
<template>
  <Icon :iconName="'inbox-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InboxDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inbox-download'
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
