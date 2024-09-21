
<template>
  <Icon :iconName="'garage'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GarageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'garage'
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
