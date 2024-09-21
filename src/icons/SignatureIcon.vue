
<template>
  <Icon :iconName="'signature'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignatureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signature'
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
