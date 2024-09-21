
<template>
  <Icon :iconName="'message-secure-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageSecure01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-secure-01'
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
