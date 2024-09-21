
<template>
  <Icon :iconName="'hospital-location'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HospitalLocationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hospital-location'
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
