
<template>
  <Icon :iconName="'treatment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TreatmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'treatment'
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
