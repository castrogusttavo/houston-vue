
<template>
  <Icon :iconName="'call-ringing-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallRinging03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-ringing-03'
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
