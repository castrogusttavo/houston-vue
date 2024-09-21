
<template>
  <Icon :iconName="'package-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-remove'
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
