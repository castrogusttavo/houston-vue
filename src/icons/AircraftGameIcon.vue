
<template>
  <Icon :iconName="'aircraft-game'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AircraftGameIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'aircraft-game'
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
