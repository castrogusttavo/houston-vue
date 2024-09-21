
<template>
  <Icon :iconName="'message-outgoing-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageOutgoing01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-outgoing-01'
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
