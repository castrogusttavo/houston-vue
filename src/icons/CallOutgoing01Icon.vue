
<template>
  <Icon :iconName="'call-outgoing-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallOutgoing01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-outgoing-01'
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
