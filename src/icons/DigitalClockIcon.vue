
<template>
  <Icon :iconName="'digital-clock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DigitalClockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'digital-clock'
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
