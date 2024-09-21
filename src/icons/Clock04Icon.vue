
<template>
  <Icon :iconName="'clock-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clock04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clock-04'
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
