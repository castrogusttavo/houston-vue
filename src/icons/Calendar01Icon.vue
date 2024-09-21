
<template>
  <Icon :iconName="'calendar-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calendar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-01'
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
