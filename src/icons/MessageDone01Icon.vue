
<template>
  <Icon :iconName="'message-done-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-done-01'
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
