
<template>
  <Icon :iconName="'package-delivered'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageDeliveredIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-delivered'
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
