
<template>
  <Icon :iconName="'doctor-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Doctor01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doctor-01'
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
