
<template>
  <Icon :iconName="'package-open'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageOpenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-open'
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
