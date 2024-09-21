
<template>
  <Icon :iconName="'hanging-clock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HangingClockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hanging-clock'
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
