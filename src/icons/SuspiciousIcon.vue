
<template>
  <Icon :iconName="'suspicious'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SuspiciousIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'suspicious'
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
