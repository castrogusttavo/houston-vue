
<template>
  <Icon :iconName="'copy-link'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CopyLinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'copy-link'
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
