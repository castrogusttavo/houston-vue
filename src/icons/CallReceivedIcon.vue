
<template>
  <Icon :iconName="'call-received'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallReceivedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-received'
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
