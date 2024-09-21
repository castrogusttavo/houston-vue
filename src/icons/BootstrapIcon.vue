
<template>
  <Icon :iconName="'bootstrap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BootstrapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bootstrap'
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
