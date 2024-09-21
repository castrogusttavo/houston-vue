
<template>
  <Icon :iconName="'calendar-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calendar03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-03'
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
