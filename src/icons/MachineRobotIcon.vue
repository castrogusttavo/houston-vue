
<template>
  <Icon :iconName="'machine-robot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MachineRobotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'machine-robot'
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
