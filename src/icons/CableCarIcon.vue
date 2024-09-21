
<template>
  <Icon :iconName="'cable-car'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CableCarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cable-car'
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
