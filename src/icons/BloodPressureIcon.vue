
<template>
  <Icon :iconName="'blood-pressure'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloodPressureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blood-pressure'
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
