
<template>
  <Icon :iconName="'patient'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PatientIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'patient'
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
