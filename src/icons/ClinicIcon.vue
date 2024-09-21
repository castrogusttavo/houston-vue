
<template>
  <Icon :iconName="'clinic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClinicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clinic'
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
