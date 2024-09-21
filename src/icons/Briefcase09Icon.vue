
<template>
  <Icon :iconName="'briefcase-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-09'
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
