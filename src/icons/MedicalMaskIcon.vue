
<template>
  <Icon :iconName="'medical-mask'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedicalMaskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medical-mask'
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
