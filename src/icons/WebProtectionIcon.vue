
<template>
  <Icon :iconName="'web-protection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebProtectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-protection'
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
