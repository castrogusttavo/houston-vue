
<template>
  <Icon :iconName="'map-pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapPinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'map-pin'
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
