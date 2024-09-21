
<template>
  <Icon :iconName="'cloud-server'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudServerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-server'
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
