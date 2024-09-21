
<template>
  <Icon :iconName="'shield-user'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShieldUserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-user'
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
