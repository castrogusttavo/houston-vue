
<template>
  <Icon :iconName="'activity-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Activity01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'activity-01'
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
