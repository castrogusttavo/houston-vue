
<template>
  <Icon :iconName="'battery-full'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryFullIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-full'
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
