
<template>
  <Icon :iconName="'package-moving'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageMovingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-moving'
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
