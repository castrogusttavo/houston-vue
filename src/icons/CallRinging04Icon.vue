
<template>
  <Icon :iconName="'call-ringing-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallRinging04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-ringing-04'
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
