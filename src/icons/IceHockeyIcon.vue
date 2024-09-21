
<template>
  <Icon :iconName="'ice-hockey'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceHockeyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-hockey'
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
