
<template>
  <Icon :iconName="'file-link'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileLinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-link'
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
