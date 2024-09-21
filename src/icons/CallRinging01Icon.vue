
<template>
  <Icon :iconName="'call-ringing-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallRinging01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-ringing-01'
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
