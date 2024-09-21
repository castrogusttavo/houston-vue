
<template>
  <Icon :iconName="'doctor-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Doctor03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'doctor-03'
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
