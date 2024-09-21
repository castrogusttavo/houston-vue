
<template>
  <Icon :iconName="'stethoscope'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StethoscopeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stethoscope'
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
