
<template>
  <Icon :iconName="'file-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileSecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-security'
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
