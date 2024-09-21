
<template>
  <Icon :iconName="'sunglasses'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunglassesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sunglasses'
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
