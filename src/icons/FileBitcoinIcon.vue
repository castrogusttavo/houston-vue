
<template>
  <Icon :iconName="'file-bitcoin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileBitcoinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-bitcoin'
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
