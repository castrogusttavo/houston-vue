
<template>
  <Icon :iconName="'airplane-seat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneSeatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-seat'
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
