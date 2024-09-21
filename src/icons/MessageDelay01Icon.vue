
<template>
  <Icon :iconName="'message-delay-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDelay01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-delay-01'
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
