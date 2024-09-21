
<template>
  <Icon :iconName="'student-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StudentCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'student-card'
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
