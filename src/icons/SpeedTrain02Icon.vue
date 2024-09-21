
<template>
  <Icon :iconName="'speed-train-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpeedTrain02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'speed-train-02'
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
