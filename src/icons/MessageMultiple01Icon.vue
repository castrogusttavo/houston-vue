
<template>
  <Icon :iconName="'message-multiple-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageMultiple01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-multiple-01'
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
