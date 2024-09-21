
<template>
  <Icon :iconName="'package'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package'
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
