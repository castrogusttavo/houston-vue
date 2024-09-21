
<template>
  <Icon :iconName="'pyramid-maslowo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PyramidMaslowoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pyramid-maslowo'
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
