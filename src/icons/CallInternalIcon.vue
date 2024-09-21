
<template>
  <Icon :iconName="'call-internal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallInternalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-internal'
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
