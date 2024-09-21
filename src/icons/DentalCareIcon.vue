
<template>
  <Icon :iconName="'dental-care'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DentalCareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dental-care'
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
