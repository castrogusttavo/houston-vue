
<template>
  <Icon :iconName="'package-receive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageReceiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-receive'
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
