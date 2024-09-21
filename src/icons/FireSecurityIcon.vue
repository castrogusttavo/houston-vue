
<template>
  <Icon :iconName="'fire-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FireSecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fire-security'
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
