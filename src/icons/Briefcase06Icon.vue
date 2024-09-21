
<template>
  <Icon :iconName="'briefcase-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-06'
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
