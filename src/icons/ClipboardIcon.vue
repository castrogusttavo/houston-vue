
<template>
  <Icon :iconName="'clipboard'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClipboardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clipboard'
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
