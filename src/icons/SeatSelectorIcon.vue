
<template>
  <Icon :iconName="'seat-selector'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SeatSelectorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'seat-selector'
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
