
<template>
  <Icon :iconName="'briefcase-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-05'
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
