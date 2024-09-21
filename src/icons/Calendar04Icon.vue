
<template>
  <Icon :iconName="'calendar-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calendar04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-04'
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
