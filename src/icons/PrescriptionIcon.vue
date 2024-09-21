
<template>
  <Icon :iconName="'prescription'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrescriptionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prescription'
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
