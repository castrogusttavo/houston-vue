
<template>
  <Icon :iconName="'periscope'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PeriscopeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'periscope'
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
