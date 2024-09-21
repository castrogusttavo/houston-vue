
<template>
  <Icon :iconName="'dollar-send-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarSend01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-send-01'
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
