
<template>
  <Icon :iconName="'drone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DroneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drone'
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
