
<template>
  <Icon :iconName="'file-paste'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilePasteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-paste'
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
