
<template>
  <Icon :iconName="'identity-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdentityCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'identity-card'
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
