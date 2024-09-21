
<template>
  <Icon :iconName="'security-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-check'
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
