
<template>
  <Icon :iconName="'activity-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Activity03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'activity-03'
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
