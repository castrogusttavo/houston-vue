
<template>
  <Icon :iconName="'hospital-bed-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HospitalBed02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hospital-bed-02'
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
