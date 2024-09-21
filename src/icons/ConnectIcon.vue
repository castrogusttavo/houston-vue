
<template>
  <Icon :iconName="'connect'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConnectIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'connect'
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
