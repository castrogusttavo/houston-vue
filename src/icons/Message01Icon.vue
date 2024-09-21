
<template>
  <Icon :iconName="'message-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Message01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-01'
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
