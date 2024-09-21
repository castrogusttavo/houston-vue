
<template>
  <Icon :iconName="'briefcase-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-08'
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
