
<template>
  <Icon :iconName="'ferry-boat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FerryBoatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ferry-boat'
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
