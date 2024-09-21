
<template>
  <Icon :iconName="'doctor-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Doctor02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doctor-02'
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
