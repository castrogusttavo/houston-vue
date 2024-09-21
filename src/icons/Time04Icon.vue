
<template>
  <Icon :iconName="'time-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Time04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-04'
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
