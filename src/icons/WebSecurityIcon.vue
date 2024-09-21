
<template>
  <Icon :iconName="'web-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebSecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-security'
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
