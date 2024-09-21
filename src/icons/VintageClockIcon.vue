
<template>
  <Icon :iconName="'vintage-clock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VintageClockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vintage-clock'
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
