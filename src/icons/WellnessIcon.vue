
<template>
  <Icon :iconName="'wellness'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WellnessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wellness'
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
