
<template>
  <Icon :iconName="'package-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PackageAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'package-add'
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
