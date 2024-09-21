
<template>
  <Icon :iconName="'traffic-light'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrafficLightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'traffic-light'
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
