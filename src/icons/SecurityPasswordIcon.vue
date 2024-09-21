
<template>
  <Icon :iconName="'security-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityPasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-password'
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
